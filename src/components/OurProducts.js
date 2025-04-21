import React from 'react'
import Product from './Product'

function OurProducts() {
    return (
        <div className='pt-20'>
            <h1 className=' text-center text-5xl py-5 font-rufina'>Our Products</h1>

            <div className='flex items-center justify-center py-5'>
                {
                    ["Sale", "Hot", "New Arivals", "Accessories"].map((item, index) => (
                        <a href="#" 
                        key={index}
                        className='font-poppins uppercase text-sm font-[400] leading-tight mx-5 w-fit hover:border-b-2 hover:border-b-sky-600'
                        >{item}</a>
                    ))
                }
            </div>

            <div className='flex flex-wrap items-center justify-between py-5'>
                <Product
                img={"https://s3-alpha-sig.figma.com/img/bf93/6cef/0caa01d70434a2ed2d0370360150bf5e?Expires=1746403200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=qzylRsgxCVyG2yduNCxMWjOgvC1lm-JCTUoZI8EHtS53i-DWDgoiws7IZp~zQSf5BMctDXZWmZdHftjSwbtZViIyPknlBNeQWKLlKZhA3t7gpF6ZS4uN~Z3rgqhoAorv1v8SKgtFzniuGFm1SKZWpitgLkm60p2I7al-FppTbMUDRVWgaZtWUUe70e1fpdnVRCdHcF02kjNrdeEqS6sixEJZ0lBUPiHbXp~6-8vqc8y0U6QAct~-HEgXrj4OkxPKG60KDEMffN-o244j6C3p23cOlDaZZw8vrqYK69N0fLWh4C-~l9keG-gmJdlQ07dI7b7ngHhUYy0KUT0j5rYVlQ__"}
                    title={"Spread Collar Shirt"}
                    price={"48.9"}
                    rating={"4.5"}
                />
                <Product
                    img={"https://s3-alpha-sig.figma.com/img/b0ae/4c3a/5b0078ba701d4e3b179682dc806fb5ee?Expires=1746403200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=iwkoIB-dLW0c-Ns0hPMEsqKuswtQlXSI61410d7lwkKCMpUiixwzMrjnXHBu7zIVJzMMCH17-w5ZbI3ixOKvx9QbQgTLm5dHPrUtlh9oVVnzjNPV9hf3hrqEUMZ9sK4Y8xsZN9AhCSrGS7tnyuVog~GBXVL4yhTq~Z~MkJTeuPrU2pWXRf6TarMkCWHuPmUpgaJ7YGaeDbcudp3iMOcJJ79ejwYF2~9Pe4RgR2uJiDJMn~ulaYkjF8pSbwDLSbUDCzVsbo9DiB80t-wDj8QREwixbp9VdkkJgsZZiWQCkxvnLYfl2~uyxPEcGIhU0sAZtvtZ0OdEPsQA2V8SZGH3EA__"}
                    title={"White Solid Formal Shirt"}
                    price={"39.0"}
                    rating={"4.9"}
                />
                <Product
                    img={"https://s3-alpha-sig.figma.com/img/4bfd/ab1f/ac6016fba11536ac8604de0aea1b7395?Expires=1746403200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=JoGW~dZ6vXFIJRpkNIquU01zE~EX2tcvySuWu-vuz80ykqJ-d-fu017zXXlfB3YCetdu-QHVGNyVJm5dQI4Qd1zfl59emN51P8f-RC5drJO9OvwyBCmWk0-UtuFygAxxWrtGEZHhxXNyHy5pgJp0VX3XZo7djrRqNWuX-zJ9G-ex64tqvWfvQLEm-M97lkRc4s9RSZuE4IuMdpdELnoX1EDAsaYM6GpbCaavEf79KxSv-XNr0leDZyOjjqZ5~6jTp4qrnIiKZyNrObwKvqGt-12IR7IdNdct~7R9O9BNBG3S50dFIe3FK7uqmTFM-qMh2fnzpJapPMuhXSkXwpBYyQ__"}
                    title={"Textured Sunset Shirt"}
                    price={"49.9"}
                    rating={"4.8"}
                />
                <Product
                    img={"https://s3-alpha-sig.figma.com/img/43db/f937/01126211f33c8a4147b1bfcfcc6d8e22?Expires=1746403200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=HLrtSBEAF7zl4hIDleRRzDQ1s4rsUNMKDGNOYWVCC8R17aZXm2b3fDa181IKYJwyc-9~yn0eYymgJXLUcYH~JAnDe8ggl01E0U30vH~sFGxxNpr6NwwpCPp-UumHVeTXSL70J~c-9Y1b4OL18srfqPlTfowYpWdJvmWZXWMr6dGluUzs3hB~dAlFhj-Qem86iZ5bUCWVeaMlMHAnxWQz3acetGqy5ajAxFGwZ5YspH3mrv8TKBEr-6a4UIRQgDO7oQoCBo5jQ53NC~ur5h6GtHb2GWLjfUFzY1jRSy6sj2RMX4P~g~J4xxgLpw3jzr5mRUuBqFFRdxwRM3M2JwNj9g__"}
                    title={"Gray Solid Padded Jacket"}
                    price={"32.99"}
                    rating={"4.9"}
                />
                <Product
                    img={"https://s3-alpha-sig.figma.com/img/3793/82c4/6ac91e859ec53c4e535b4a8232ee23de?Expires=1746403200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=HOmkv7Q~Jvj11e3WDlBIbTQZfCUZ0L1XCTio9-a-i7T4YjBMm51i4M4JMV8Z9FhvFByRcguXqZzooUqgSQvHKb3rGi8HNbAo9GJfwjM9qPZDJGUS-aYlHEvN87OwYbp08RvX7AR4pBCBykCn0oTSq5M8V2Q-se9g4qbXeQDkLEzYWJHv6W7Ha-Jg6rLwk2wUrr9mONBRbH31rebDNlXmqiILpJPgsThx4BJaePI4zAY2RwhPiNwpCG4jDHH~kFZrfGW~jioky6z9UCt~~v7-A-iws5d0braWpibM-fQSwaulztmGPDp0h3rZFWw1WQcbWAfJai5VK-7WE2n8zZME-g__"}
                    title={"Printed Loose T-shirt"}
                    price={"39.9"}
                    rating={"5.0"}
                />
                <Product
                    img={"http://s3-alpha-sig.figma.com/img/1610/3eab/62e972ec931381e36a3868cd328fd47a?Expires=1746403200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Zhekoj1a7iOrMU2cd0FmjuDjNkwNn7B6T2Y7nlakQsF6qhSIf24TrfIi649ZmRexbdyWMsTMou6riVKEdIqhvmDfPlfUSuokXoFZNTonQM99Dv9ljCm21Ym1jfKUiAXh5SRuR16M3oSqKx4VZkH9ybTL4Vr0F-n5a09I1udFlFka~x6zMDkTMhBwXNYg~ReW22falYHOzOnXrZxv7d4CQlkipdx2S96BYUVQRG5wSCHCcsULxqINET7OCLzO4mzyYZ6-eDeK9i2-MkcrxfuX-DnVB9mHgRBIsCbyZxuFSiEDRxHPozewW2jlDqlRetrx9DFo0JQ3-20qR8AOZunqQQ__"}
                    title={"Summer Wind Crop Shirt"}
                    price={"65.99"}
                    rating={"4.7"}
                />
                <Product
                    img={"https://s3-alpha-sig.figma.com/img/380f/4d87/6a6e09212a48c77c3792e100104bc00e?Expires=1746403200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=STQCF~9UHrotfqxdAtO9UQq6Uvc~OgOYifPNykNotl5Shww1itmEpCK75Azs7nBeY1CDaPAp5SiXn76HaVHFeRD9yU0vL1X2LlSsgOGy-ZqC1nVtG0hR0jUlYssw70ry7TRq~Z8R5vobKX5gEcFa75zjPDNPB5if8I7IQWyFpEhcSvES~VGNU8gbIQW2~BKU4DWFVaRCIYPRGE5bjfTtSvbx5bstDhy3~wyODux2FikhE9lh0UHLsGkDNLqftao5FPLDftB4I7dTYiXhmHgZ03HwdiUI-E~wGgaZFnKZXH4uMNcoDC7MYFcI~aAKHWipOlLWPYUj-Ni2sGHbdweb1A__"}
                    title={"Tailored Jacket"}
                    price={"46.9"}
                    rating={"3.9"}
                />
                <Product
                    img={"https://s3-alpha-sig.figma.com/img/ecce/cc95/71bf273d78f602b3598feda38bf1c22c?Expires=1746403200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=S3lrFI~0d2P3sTqzRtqYmZKMP-DVnre~ycs0viBsSP9y3O6gWqlh~QThVrdkFcIhTwYEHxRqh6f4eQVs1U8R7MXdIse4oQoBfmzeTr~n7FqRZpLmbqs46HIcqapOMiCe~OvlZoxn-8NJ~VkpLYbVocd1rJNww5Of6CzlczeOPSlMKlhDpvL-mNudm1Nn99jVMipWNuKytpQUA5lLEVhi9U~Y8nb6UgM6F21rpK7oV1MciogipcHJx-fTQ1VFhMZ-GSmXk0oJjxhbqMchCHrlLOnrzqqf0P1sJbLg~LA0IOv43Jx0kSTHWrqzZj-TqSkougahZ75UTF3SiudCi~XzIA__"}
                    title={"Solid Round Neck T-shirt"}
                    price={"36.99"}
                    rating={"5.0"}
                />
            </div>
        </div>
    )
}

export default OurProducts
