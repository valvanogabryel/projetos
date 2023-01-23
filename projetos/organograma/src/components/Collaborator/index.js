import './Collaborator.css';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';


//                     desestruturação da prop
const Collaborator = ({ name, role, image, primary_color, onDelete, id, isFavorite, onFavorite }) => {
    const cardColor = primary_color;

    const propsDefault = {
        size: 25,
        onClick: favorite
    }

    function favorite() {
        onFavorite(id);
    }

    return (
        <div className="card__container">
            <span className='delete' onClick={() => onDelete(id)}>X</span>
            <div className="card__picture" style={{ backgroundColor: cardColor }}>
                <img src={image} alt="Foto de perfil do colaborador" />
            </div>
            <div className="card__informations">
                <h4>{name.toUpperCase()}</h4>
                <h5>{role}</h5>
                <div className="favorite">
                    {isFavorite ? <AiFillHeart color='red' {...propsDefault} />
                        : <AiOutlineHeart color={primary_color} {...propsDefault} />}
                </div>
            </div>
        </div>
    )
}

export default Collaborator;