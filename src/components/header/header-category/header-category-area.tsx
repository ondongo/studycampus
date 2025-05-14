import { CategorySvg } from "@/components/svg";
import Link from "next/link";


export default function HeaderCategoryArea() {
  return (
    <div className="tp-header-2-category tp-header-inner-category home-2 d-none d-md-block">
      <Link className="tp-header-2-category-icon" href="/course-with-sidebar">
        <p>
          <span>
            <CategorySvg/>
          </span>
          {" "}Category
        </p>
      </Link>
      <div className="tp-header-2-category-list">
        <ul>
          <li>
            <Link href="/course-with-sidebar">English Learning</Link>
          </li>
          <li>
            <Link href="/course-with-sidebar">Web Development</Link>
          </li>
          <li>
            <Link href="/course-with-sidebar">Logo Design</Link>
          </li>
          <li>
            <Link href="/course-with-sidebar">Motion Graphics</Link>
          </li>
          <li>
            <Link href="/course-with-sidebar">Video Edition</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
