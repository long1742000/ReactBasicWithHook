import { useParams, useHistory } from "react-router-dom";
import useFecthData from "../customHook/fetchData";

const DataDetail = () => {
    let { id } = useParams();

    const { data } = useFecthData("https://api.jikan.moe/v4/anime/" + id);
    let srcImg = '';

    try {
        srcImg = data.images.webp.large_image_url;
    } catch (e) {
        console.log(e);
    }

    let history = useHistory();
    console.log(history);

    const clickBack = () => {
        history.goBack();
    }

    return (
        <>
            <span onClick={() => { clickBack() }}>Back</span>
            <img src={srcImg} alt={data.title} />
            {data &&
                <table id="detail">
                    <tbody>
                        <tr>
                            <td>ID</td>
                            <td>{data.mal_id}</td>
                        </tr>
                        <tr>
                            <td>Title</td>
                            <td>{data.title}</td>
                        </tr>
                        <tr>
                            <td>Title Japanese</td>
                            <td>{data.title_japanese}</td>
                        </tr>
                        <tr>
                            <td>Background</td>
                            <td>{data.background}</td>
                        </tr>
                        <tr>
                            <td>Member</td>
                            <td>{data.members}</td>
                        </tr>
                        <tr>
                            <td>Favorites</td>
                            <td>{data.favorites}</td>
                        </tr>
                        <tr>
                            <td>Rank</td>
                            <td>{data.rank}</td>
                        </tr>
                        <tr>
                            <td>Status</td>
                            <td>{data.status}</td>
                        </tr>
                    </tbody>
                </table>
            }
            {!data &&
                <p>Loading data...</p>
            }
        </>
    )
}

export default DataDetail;