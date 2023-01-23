import './Collaborator.css';
import 'animate.css';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';


//                     desestruturação da prop
const Collaborator = ({ name, role, image, primary_color, onDelete, id, isFavorite, onFavorite }) => {
    const cardColor = primary_color;

    function favorite() {
        onFavorite(id);
    }

    const propsDefault = {
        size: 25,
        cursor: 'pointer',
        onClick: favorite
    }

    return (//                          
        <div className="card__container ">
            <span className='delete' onClick={() => onDelete(id)}>X</span>
            <div className="card__picture" style={{ backgroundColor: cardColor }}>
                <img src={image} alt="Foto de perfil do colaborador" />
            </div>
            <div className="card__informations">
                <h4>{name.toUpperCase()}</h4>
                <h5>{role}</h5>
                <div className="favorite">
                    {isFavorite ? <AiFillHeart className='animate__animated animate__heartBeat' color='red' {...propsDefault} />
                        : <AiOutlineHeart color={cardColor} {...propsDefault} />}
                </div>
            </div>
        </div>
    )
}

export default Collaborator;