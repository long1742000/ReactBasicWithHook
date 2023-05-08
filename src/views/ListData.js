import './Home.scss';
import useFecthData from '../customHook/fetchData';

const ListData = () => {

    const { data } = useFecthData("https://api.jikan.moe/v4/anime");

    return (
        <table id="customers">
            {console.log("check data: ", data)}
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Image</th>
                    <th>Rank</th>
                    <th>Favorites</th>
                </tr>
            </thead>
            <tbody>
                {data && data.length > 0 &&
                    data.map(item => {
                        return (
                            <tr key={item.mal_id}>
                                <td>{item.title}</td>
                                <td><img src={item.images.webp.small_image_url} alt={item.title} /></td>
                                <td>{item.rank}</td>
                                <td>{item.favorites}</td>
                            </tr>
                        )
                    })
                }
                {data.length === 0 &&
                    <tr>
                        <td colSpan="5" >Loading data...</td>
                    </tr>
                }
            </tbody>
        </table>
    )
}
export default ListData;