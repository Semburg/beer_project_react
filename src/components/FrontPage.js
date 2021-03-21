import { Link } from 'react-router-dom';

const FrontPage = () => {
    return (
        <section id="wrapper_front">
            <Link to = "/allbiers" style={{textDecoration:"none"}}>
                <div>
                    <h1>All Beers</h1>
                    <img src="https://media.istockphoto.com/photos/flight-of-craft-beer-picture-id480775284?k=6&m=480775284&s=612x612&w=0&h=C2brWyf01-eKS8nCudrhKdU7BJdwXUFtI5zrTgKwMpA=" alt="" />
                </div>
            </Link>

            <Link to = "/randombier" style={{textDecoration:"none"}}>
                <div>
                    <h1>Random beer</h1>
                    <img src="https://images.unsplash.com/photo-1518176258769-f227c798150e?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NXx8YmVlcnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80" alt="" />
                </div>
            </Link>

        </section>
    );
}

export default FrontPage;