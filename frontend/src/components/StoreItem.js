import SingleItem from "./SingleItem"

const StoreItem =(props)=> {

    const arr = props.props

    const figureComponents = arr.map (item =>
            <SingleItem
                key = {item.game_id}
                id = {item.game_id}
                title = {item.title}
                price = {item.price}
                image = {item.image}
                description = {item.description}
                rating = {item.rating}
                year = {item.year}

            />
        )

    return (
            <main className="main">
        <section className="section store-section">
            <div className="container">
                <div className="row">
                    <div className="store-header text-center">
                        <h1>{arr.title}</h1>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row flex-md-row flex-column">
                                {figureComponents}
                </div>
            </div>

        </section>
    </main>
    )
}

export default StoreItem