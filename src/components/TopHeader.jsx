import Wrapper from "../assets/TopHeader"
import { FaPhoneAlt } from "react-icons/fa";

const TopHeader = () => {
    return (
      <Wrapper>
        <div className="top-header">
          <div className="top section-center">
            <div id="google_translate_element"></div>
                  
            <div className="contact">
              <FaPhoneAlt className="phone"/>
                <article>
              <span>+1 (849) 639-112</span>
          </article>
            </div>
    </div>
        </div>
        
      </Wrapper>
     
  )
}
export default TopHeader