const MainSection = ()=>{
    return(
    <main className="main_part container">
        <div className="content">
            <h1>YOUR FEET DESERVE THE BEST</h1>
            <p>YOUR FEET DESERVE THE BEST AND WE'RE HERE TO HELP YOU WITH OUR SHOES.
                YOUR FEET DESERVE THE BEST AND WE'RE HERE TO HELP YOU WITH OUR SHOES. 
            </p> 
            <div className="buttons">
                <button>Shop Now</button>
                <button className="sec_btn">Category</button>
            </div>
            <div className="shopping">
                <p>Also Available On</p>
                <div className="brand-names">
                    <img src="/images/amazon.png" alt="amazon-logo" />
                    <img src="/images/flipkart.png" alt="flipkart-logo" />
                </div>
            </div>
        </div>
        <div className="image">
            <img src="/images/shoes.jpeg" alt="shoes" />
        </div>
    </main>
    );
}
export default MainSection;