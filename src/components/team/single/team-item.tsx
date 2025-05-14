import Link from "next/link";
import Image from "next/image";
import { UpArrowTwo } from "@/components/svg";
import { ITeamDT } from "@/types/team-d-t";

type IProps = {
  item: ITeamDT;
  instructor?: boolean;
}

export default function TeamItem({item,instructor}:IProps) {
  return (
    <div className="tp-leadership-item mb-55">
      <div className={`tp-leadership-thumb ${instructor?'instructor':''} p-relative`}>
        <Image
          src={item.image}
          alt={item.name}
          width={282}
          height={340}
          style={{ height: "auto" }}
        />
        <div className="tp-leadership-hover-box d-flex justify-content-between align-items-center">
          <div className="tp-leadership-social">
            {item.socials.map((social) => (
              <a key={social.id} href={social.link} target="_blank">
                <i className={social.iconCls}></i>
              </a>
            ))}
          </div>
          <div className="tp-leadership-btn">
            <Link href="/my-profile">
              Details
              <span>
                <UpArrowTwo />
              </span>
            </Link>
          </div>
        </div>
      </div>
      <div className="tp-leadership-content">
        <span>{item.title}</span>
        <h4 className="tp-leadership-title">
          <Link href="/my-profile">{item.name}</Link>
        </h4>
      </div>
    </div>
  );
}
