import BrokenImage from '@assets/png/not_found.png';

const handleBrokenImage = (e) => {
    e.target.src = BrokenImage;
}

export default handleBrokenImage;