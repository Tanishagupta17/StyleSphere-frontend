'use client'

import { useEffect, useState } from 'react'
// import { StarIcon } from '@heroicons/react/20/solid'
import { RadioGroup } from '@headlessui/react'
import { Box, Button, Grid, LinearProgress, Rating } from '@mui/material'
import ProductReviewCard from './ProductReviewCard'
import { useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { findProductById } from '../../../../State/customer/Product/Action'
import { addItemToCart } from '../../../../State/customer/Cart/Action'

const product = {
    name: 'Basic Tee 6-Pack',
    price: '$192',
    href: '#',
    breadcrumbs: [
        { id: 1, name: 'Men', href: '#' },
        { id: 2, name: 'Clothing', href: '#' },
    ],
    images: [
        {
            src: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-02-secondary-product-shot.jpg',
            alt: 'Two each of gray, white, and black shirts laying flat.',
        },
        {
            src: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-02-tertiary-product-shot-01.jpg',
            alt: 'Model wearing plain black basic tee.',
        },
        {
            src: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-02-tertiary-product-shot-02.jpg',
            alt: 'Model wearing plain gray basic tee.',
        },
        {
            src: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-02-featured-product-shot.jpg',
            alt: 'Model wearing plain white basic tee.',
        },
    ],
    colors: [
        { name: 'White', class: 'bg-white', selectedClass: 'ring-gray-400' },
        { name: 'Gray', class: 'bg-gray-200', selectedClass: 'ring-gray-400' },
        { name: 'Black', class: 'bg-gray-900', selectedClass: 'ring-gray-900' },
    ],
    sizes: [
        { name: 'XXS', inStock: false },
        { name: 'XS', inStock: true },
        { name: 'S', inStock: true },
        { name: 'M', inStock: true },
        { name: 'L', inStock: true },
        { name: 'XL', inStock: true },
        { name: '2XL', inStock: true },
        { name: '3XL', inStock: true },
    ],
    description:
        'The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: "Black". Need to add an extra pop of color to your outfit? Our white tee has you covered.',
    highlights: [
        'Hand cut and sewn locally',
        'Dyed with our proprietary colors',
        'Pre-washed & pre-shrunk',
        'Ultra-soft 100% cotton',
    ],
    details:
        'The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming "Charcoal Gray" limited release.',
}
const reviews = { href: '#', average: 4, totalCount: 117 }
function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}



export default function ProductDetails() {
    const [selectedSize, setSelectedSize] = useState();
    const [activeImage, setActiveImage] = useState(null);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { customersProduct } = useSelector((store) => store);
    const { productId } = useParams();
    const jwt = localStorage.getItem("jwt");
    // console.log("param",productId,customersProduct.product)

    const handleSetActiveImage = (image) => {
        setActiveImage(image);
    };

    const handleSubmit = () => {
        const data = { productId, size: selectedSize};
        dispatch(addItemToCart({ data, jwt }));
        navigate("/cart");
    };

    useEffect(() => {
        const data = { productId: Number(productId), jwt };
        dispatch(findProductById(data));
        // dispatch(getAllReviews(productId));
    }, [productId]);

    // console.log(customersProduct.product?.sizes);

    const sizesArray = customersProduct.product?.sizes
        ? Array.isArray(customersProduct.product.sizes)
            ? customersProduct.product.sizes
            : Object.values(customersProduct.product.sizes)
        : [];

    sizesArray.sort((a, b) => {
        if (a.name.toLowerCase() < b.name.toLowerCase()) return -1;
        if (a.name.toLowerCase() > b.name.toLowerCase()) return 1;
        return 0;
    });

    return (
        <div className="bg-white">
            <div className="pt-16">

                <section className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-2 px-4 pt-10">

                    {/* Image gallery */}
                    <div className="flex flex-col items-center ">
                        <div className=" overflow-hidden rounded-lg max-w-[30rem] max-h-[35rem]">
                            <img
                                src={activeImage?.src || customersProduct.product?.imageUrl}
                                alt={product.images[0].alt}
                                className="h-full w-full object-cover object-center"
                            />
                        </div>
                        <div className="flex flex-wrap space-x-5 justify-center">
                            {product.images.map((image) => (
                                <div
                                    onClick={() => handleSetActiveImage(image)}
                                    className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg max-w-[5rem] max-h-[5rem] mt-4"
                                >
                                    <img
                                        src={image.src}
                                        alt={product.images[1].alt}
                                        className="h-full w-full object-cover object-center"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Product info */}

                    <div className="lg:col-span-1 mx-auto max-w-2xl px-4 pb-16 sm:px-6  lg:max-w-7xl  lg:px-8 lg:pb-24">
                        <div className="lg:col-span-2">
                            <h1 className="text-lg lg:text-xl font-semibold tracking-tight text-gray-900  ">
                                {customersProduct.product?.brand}
                            </h1>
                            <h1 className="text-lg lg:text-xl tracking-tight text-gray-900 opacity-60 pt-1">
                                {customersProduct.product?.title}
                            </h1>
                        </div>

                        {/* Options */}
                        <div className="mt-4 lg:row-span-3 lg:mt-0">
                            <h2 className="sr-only">Product information</h2>
                            <div className="flex space-x-5 items-center text-lg lg:text-xl tracking-tight text-gray-900 mt-6">
                                <p className="font-semibold">
                                    {customersProduct.product?.discountedPrice}
                                </p>
                                <p className="opacity-50 line-through">
                                    {customersProduct.product?.price}
                                </p>
                                <p className="text-green-600 font-semibold">
                                    {customersProduct.product?.discountPersent}% Off
                                </p>
                            </div>

                            {/* Reviews */}
                            <div className="mt-6">
                                <h3 className="sr-only">Reviews</h3>

                                <div className="flex items-center space-x-3">
                                    <Rating
                                        name="read-only"
                                        value={4.6}
                                        precision={0.5}
                                        readOnly
                                    />

                                    <p className="opacity-60 text-sm">
                                        {customersProduct.product?.ratings?.count ?? 0} Ratings
                                    </p>

                                    <p className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500">
                                        {customersProduct.product?.reviews?.count ?? 0} reviews
                                    </p>
                                </div>
                            </div>

                            <form className="mt-10" onSubmit={handleSubmit}>
                                {/* Sizes */}
                                <div className="mt-10">
                                    <div className="flex items-center justify-between">
                                        <h3 className="text-sm font-medium text-gray-900">Size</h3>
                                    </div>

                                    <RadioGroup
                                        value={selectedSize}
                                        onChange={setSelectedSize}
                                        className="mt-4"
                                    >
                                        <RadioGroup.Label className="sr-only">
                                            Choose a size
                                        </RadioGroup.Label>
                                        <div className="grid grid-cols-4 gap-4 sm:grid-cols-8 lg:grid-cols-10">
                                            {sizesArray.map((size) => (
                                                <RadioGroup.Option
                                                    onClick={()=>{
                                                        console.log(selectedSize);
                                                        
                                                    }}
                                                    key={size.name}
                                                    value={size.name}
                                                    disabled={sizesArray.quantity === 0}
                                                    className={({ active }) =>
                                                        classNames(
                                                            sizesArray.quantity != 0
                                                                ? "cursor-pointer bg-white text-gray-900 shadow-sm"
                                                                : "cursor-not-allowed bg-gray-50 text-gray-200",
                                                            active ? "ring-1 ring-indigo-500" : "",
                                                            "group relative flex items-center justify-center rounded-md border py-1 px-1 text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6"
                                                        )
                                                    }
                                                >
                                                    {({ active, checked }) => (
                                                        <>
                                                            <RadioGroup.Label as="span">
                                                                {size.name}
                                                            </RadioGroup.Label>
                                                            {sizesArray.quantity != 0 ? (
                                                                <span
                                                                    className={classNames(
                                                                        active ? "border" : "border-2",
                                                                        checked
                                                                            ? "border-indigo-500"
                                                                            : "border-transparent",
                                                                        "pointer-events-none absolute -inset-px rounded-md"
                                                                    )}
                                                                    aria-hidden="true"
                                                                />
                                                            ) : (
                                                                <span
                                                                    aria-hidden="true"
                                                                    className="pointer-events-none absolute -inset-px rounded-md border-2 border-gray-200"
                                                                >
                                                                    <svg
                                                                        className="absolute inset-0 h-full w-full stroke-2 text-gray-200"
                                                                        viewBox="0 0 100 100"
                                                                        preserveAspectRatio="none"
                                                                        stroke="currentColor"
                                                                    >
                                                                        <line
                                                                            x1={0}
                                                                            y1={100}
                                                                            x2={100}
                                                                            y2={0}
                                                                            vectorEffect="non-scaling-stroke"
                                                                        />
                                                                    </svg>
                                                                </span>
                                                            )}
                                                        </>
                                                    )}
                                                </RadioGroup.Option>
                                            ))}
                                        </div>
                                    </RadioGroup>
                                </div>

                                <Button
                                    variant="contained"
                                    type="submit"
                                    sx={{ padding: ".8rem 2rem", marginTop: "2rem" }}
                                >
                                    Add To Cart
                                </Button>
                            </form>
                        </div>

                        <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">
                            {/* Description and details */}
                            <div>
                                <h3 className="sr-only">Description</h3>

                                <div className="space-y-6">
                                    <p className="text-base text-gray-900">
                                        {customersProduct.product?.description}
                                    </p>
                                </div>
                            </div>

                            <div className="mt-10">
                                <h3 className="text-sm font-medium text-gray-900">
                                    Highlights
                                </h3>

                                <div className="mt-4">
                                    <ul role="list" className="list-disc space-y-2 pl-4 text-sm">
                                        {product.highlights.map((highlight) => (
                                            <li key={highlight} className="text-gray-400">
                                                <span className="text-gray-600">{highlight}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            <div className="mt-10">
                                <h2 className="text-sm font-medium text-gray-900">Details</h2>

                                <div className="mt-4 space-y-6">
                                    <p className="text-sm text-gray-600">{product.details}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="">
                    <h1 className="font-semibold text-lg pl-6">
                        Recent Review & Ratings
                    </h1>

                    <div className="m-10 p-5 border">
                        <Grid container spacing={7}>
                            <Grid item xs={7}>
                                <div className="space-y-5">
                                    <ProductReviewCard />
                                    <ProductReviewCard />
                                    <ProductReviewCard />
                                    <ProductReviewCard />
                                    <ProductReviewCard />
                                </div>
                            </Grid>

                            <Grid item xs={5}>
                                <h1 className="text-xl font-semibold pb-1">Product Ratings</h1>
                                <div className="flex items-center space-x-3 pb-10">
                                    <Rating
                                        name="read-only"
                                        value={4.6}
                                        precision={0.5}
                                        readOnly
                                    />

                                    <p className="opacity-60">42807 Ratings</p>
                                </div>
                                <Box>
                                    <Grid
                                        container
                                        justifyContent="center"
                                        alignItems="center"
                                        gap={2}
                                    >
                                        <Grid xs={2}>
                                            <p className="p-0">Excellent</p>
                                        </Grid>
                                        <Grid xs={7}>
                                            <LinearProgress
                                                className=""
                                                sx={{ bgcolor: "#d0d0d0", borderRadius: 4, height: 7 }}
                                                variant="determinate"
                                                value={40}
                                                color="success"
                                            />
                                        </Grid>
                                        <Grid xs={2}>
                                            <p className="opacity-50 p-2">19259</p>
                                        </Grid>
                                    </Grid>
                                </Box>
                                <Box>
                                    <Grid
                                        container
                                        justifyContent="center"
                                        alignItems="center"
                                        gap={2}
                                    >
                                        <Grid xs={2}>
                                            <p className="p-0">Very Good</p>
                                        </Grid>
                                        <Grid xs={7}>
                                            <LinearProgress
                                                className=""
                                                sx={{ bgcolor: "#d0d0d0", borderRadius: 4, height: 7 }}
                                                variant="determinate"
                                                value={30}
                                                color="success"
                                            />
                                        </Grid>
                                        <Grid xs={2}>
                                            <p className="opacity-50 p-2">19259</p>
                                        </Grid>
                                    </Grid>
                                </Box>
                                <Box>
                                    <Grid
                                        container
                                        justifyContent="center"
                                        alignItems="center"
                                        gap={2}
                                    >
                                        <Grid xs={2}>
                                            <p className="p-0">Good</p>
                                        </Grid>
                                        <Grid xs={7}>
                                            <LinearProgress
                                                className="bg-[#885c0a]"
                                                sx={{ bgcolor: "#d0d0d0", borderRadius: 4, height: 7 }}
                                                variant="determinate"
                                                value={25}
                                                color="orange"
                                            />
                                        </Grid>
                                        <Grid xs={2}>
                                            <p className="opacity-50 p-2">19259</p>
                                        </Grid>
                                    </Grid>
                                </Box>
                                <Box>
                                    <Grid
                                        container
                                        justifyContent="center"
                                        alignItems="center"
                                        gap={2}
                                    >
                                        <Grid xs={2}>
                                            <p className="p-0">Avarage</p>
                                        </Grid>
                                        <Grid xs={7}>
                                            <LinearProgress
                                                className=""
                                                sx={{
                                                    bgcolor: "#d0d0d0",
                                                    borderRadius: 4,
                                                    height: 7,
                                                    "& .MuiLinearProgress-bar": {
                                                        bgcolor: "#885c0a", // stroke color
                                                    },
                                                }}
                                                variant="determinate"
                                                value={21}
                                                color="success"
                                            />
                                        </Grid>
                                        <Grid xs={2}>
                                            <p className="opacity-50 p-2">19259</p>
                                        </Grid>
                                    </Grid>
                                </Box>
                                <Box>
                                    <Grid
                                        container
                                        justifyContent="center"
                                        alignItems="center"
                                        gap={2}
                                    >
                                        <Grid xs={2}>
                                            <p className="p-0">Poor</p>
                                        </Grid>
                                        <Grid xs={7}>
                                            <LinearProgress
                                                className=""
                                                sx={{ bgcolor: "#d0d0d0", borderRadius: 4, height: 7 }}
                                                variant="determinate"
                                                value={10}
                                                color="error"
                                            />
                                        </Grid>
                                        <Grid xs={2}>
                                            <p className="opacity-50 p-2">19259</p>
                                        </Grid>
                                    </Grid>
                                </Box>
                            </Grid>
                        </Grid>
                    </div>
                </section>

                {/* similer product */}
                <section className=" pt-10">
                    <h1 className="py-5 text-xl font-bold">Similer Products</h1>
                    <div className="flex flex-wrap space-y-5">
                        {/* {gounsPage1.map((item) => (
                            <HomeProductCard product={item} />
                        ))} */}
                        Similer products here
                    </div>
                </section>
            </div>
        </div>
    )
}
