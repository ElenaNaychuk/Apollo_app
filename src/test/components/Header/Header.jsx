import ProgressBar from "../ProgressBar/ProgressBar";
import "./Header.scss";

const Header = () => {
    const currentIndex = 7;
    const length = 10;

    return (
        <div className='test-header-container'>
            <ProgressBar
                item={currentIndex - 1}
                amount={length}
            ></ProgressBar>
            <div className="test-header-counter">
                {currentIndex}/{length}
            </div>
        </div>
    )
}
export default Header;