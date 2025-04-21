import React from 'react'
import { MoveRight } from 'lucide-react';
import Button from './Button'
import Product from './Product';

function BestSelling() {
    return (
        <div className='w-full h-screen pt-12'>
            <h1 className='text-center text-5xl py-5 font-rufina'>Best selling</h1>
            <p className='text-center pb-5'>Get in on the trend with our curated selection of best-selling styles.</p>
            <div className='flex items-center justify-between'>
                <Product
                    img={"https://s3-alpha-sig.figma.com/img/c912/77cf/00d88a9d6f761d88c50e17e53587883c?Expires=1746403200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=f2k~tQYg9vvfnAsGNLGi-HskCp3L4vX0co8P9oihC4vyTjSmqFfn58tsbHH-gCYo6MxGQOVdxRrC8NWAO1zi-IzGlkEtiD24ymQSFaqxqOiFfuqWZARwY1EVA5NEzVsoV0RyoeaUcoCmSIpCplML5Pymig902izkdV2N3sqQHt-uJoHruzK7ZoAJjU6oUHrYQgLzqo~4HH-1LQNzEKnQQ~xDTmTw8-cJcxlSxMf8mI91pabE8bpHHMxSzFTiRhnEwha8Db3Ao9jUkwQvo0Cal9xB~K5yrNj2bPIARBF1M5NXjRg9zd-fel3g11Q6Va91bAIojD3HJx4u7xcH3yoAbQ__"}
                    title={"Regular Fit Long Sleeve Top"}
                    price={"38.9"}
                    rating={"4.5"}
                />
                <Product
                    img={"https://s3-alpha-sig.figma.com/img/6488/026e/575045ad2e6591ef838d4bcfad3ef934?Expires=1746403200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=LimrKiiap6xboUR8rULrShrJHpm0zwMFDNhPFia~htDafauiAN6ykV2QQeSwSiRpOeMsPPUJ8HR0gFjOiKzuReNjOZo7MP4YP~IuRVN8qBXW6oe3bSE1fa1q-k9Wt46dOuGNOhqZ3-GY~jo-hB7pLh3-3urRCtcRUU76tDzfL1-T0Ug8GTib5YoCEU201Rz4WehUcvkCE6H5f2yggPL9VcvhdBcDDGiLVVJ0IsK9gSgBVeI0lzZP6N0FRMwQytdOHqFnIDqqidWh9INvK9~~pLy92G1XA0NIPDBFN3M9CmSCra4esM~gk6AQuKTQjsbBmnxW0cnCbRLjVfepFAWoCg__"}
                    title={"Black Crop Tailored Jacket"}
                    price={"62.99"}
                    rating={"4.9"}
                />
                <Product
                    img={"https://s3-alpha-sig.figma.com/img/4bfd/ab1f/ac6016fba11536ac8604de0aea1b7395?Expires=1746403200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=JoGW~dZ6vXFIJRpkNIquU01zE~EX2tcvySuWu-vuz80ykqJ-d-fu017zXXlfB3YCetdu-QHVGNyVJm5dQI4Qd1zfl59emN51P8f-RC5drJO9OvwyBCmWk0-UtuFygAxxWrtGEZHhxXNyHy5pgJp0VX3XZo7djrRqNWuX-zJ9G-ex64tqvWfvQLEm-M97lkRc4s9RSZuE4IuMdpdELnoX1EDAsaYM6GpbCaavEf79KxSv-XNr0leDZyOjjqZ5~6jTp4qrnIiKZyNrObwKvqGt-12IR7IdNdct~7R9O9BNBG3S50dFIe3FK7uqmTFM-qMh2fnzpJapPMuhXSkXwpBYyQ__"}
                    title={"Textured Sunset Shirt"}
                    price={"49.9"}
                    rating={"5.0"}
                />
            </div>
            <div className='flex items-center justify-center py-5'>
                <Button content={"See all"} Icon={MoveRight} border={"border-2"} />
            </div>
        </div>
    )
}

export default BestSelling
