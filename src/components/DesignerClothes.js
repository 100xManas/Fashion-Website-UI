import React from 'react'
import Product from './Product'

function DesignerClothes() {
    return (
        <div className='py-10'>
            <h1 className=' text-center text-5xl py-5 font-rufina'>Designer Clothes For You</h1>
            <p className='text-center py-5'>Immerse yourself in the world of luxury fashion with our meticulously crafted designer clothes!</p>
            <div className='flex items-center justify-between'>
                <Product 
                img={"https://s3-alpha-sig.figma.com/img/6488/026e/575045ad2e6591ef838d4bcfad3ef934?Expires=1746403200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=LimrKiiap6xboUR8rULrShrJHpm0zwMFDNhPFia~htDafauiAN6ykV2QQeSwSiRpOeMsPPUJ8HR0gFjOiKzuReNjOZo7MP4YP~IuRVN8qBXW6oe3bSE1fa1q-k9Wt46dOuGNOhqZ3-GY~jo-hB7pLh3-3urRCtcRUU76tDzfL1-T0Ug8GTib5YoCEU201Rz4WehUcvkCE6H5f2yggPL9VcvhdBcDDGiLVVJ0IsK9gSgBVeI0lzZP6N0FRMwQytdOHqFnIDqqidWh9INvK9~~pLy92G1XA0NIPDBFN3M9CmSCra4esM~gk6AQuKTQjsbBmnxW0cnCbRLjVfepFAWoCg__"}
                title={"Accessories"}
                des={"Complete your ensemble with designer accessories such as handbags, scarves, belts, and hats."}
                />
                <Product 
                img={"https://s3-alpha-sig.figma.com/img/0abc/ae17/3bb99ea68eed17f45dbb3902e53c2861?Expires=1746403200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=oRgqWzynaSuDfgC1IXlVa3A86iklXlG~~uUzm5SZOWyhdynh1TMQ4Jilm57UomNt2985EABxWXh2SXHV2GdjgzQ4RBS-q8rZwiUHRpKgykdjoBjdTvQmg3JczHWNt77gjsgCaJK2~b1boVJdQM12SXzv3r-RXyQ-wSpT6wXldeg~eiHyGT3S3znmYzaAp8n6SC6NFGTzQ7bCU5bPY6Xx~qIfLPr7eAezqwx5qn7mhignwownoy~6gHw3WUiRaBufkmZ46DWgSZtDxXC8rcW9gFLhBEt4h4UeY6~L59pz-dSC9Xt53briAgGqq9ctzq174KhxNQfdRozunQfGXxWPPg__"}
                title={"Dresses"}
                des={"Explore a stunning range of designer dresses, including evening gowns and chic day dresses."}
                />
                <Product 
                img={"https://s3-alpha-sig.figma.com/img/1291/5434/cd211cfeb2ac1ea6c89c2743990919f5?Expires=1746403200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=O~zQchVJV0EZn-GCQsoI1VPWs-1Y59hTCgb3RmlqR2~hdpnf3D1wCo-NSGvlsLBMcXCWYuSJ5oy4FH39e5yvjjoreimm~YGV6NrFnlDma7CFf3A2joOwqHNG-E7unI86CG8ResXlRrOtQXKZ8V48AwxJfz6qSxKRwhge9M0AJjPha6osvZ8i7gV4TwNPtrx8E6tPeJBGdSyTcsQFSRmiqz3Xk251w4gt4-IXmSKxWho2uf8gpqTAMk7LIq0pBS2OuL6UWFbuVAA2swwkKJE6tEqzMeSGu1SLdY6dZZB1fwymyyvZG1bEjtIw7etG-U3wT7wDAn6BHjf-MSTPGKGmHA__"}
                title={"Outerwear"}
                des={"Browse luxurious designer coats, jackets, and blazers to stay stylishly warm during colder seasons."}
                />
            </div>
        </div>
    )
}

export default DesignerClothes
