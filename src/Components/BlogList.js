import BlogPost from "./subComponents/BlogPost";
import data from "../data";

const Header = () => {
    const mapEntries = data.map(item => {
        return(
          <BlogPost
            {...item}
          />
        )
      })
    return(
        <section>
            <nav className="Card">
                {mapEntries}
            </nav>
        </section>
    )
}

export default Header;