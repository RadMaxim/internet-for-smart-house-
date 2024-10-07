import classIMG from "./css/classIMG.module.css";
export interface IMG {
  src: string;
}
const IMG = ({ src }: IMG) => {
  return (
    <div className={classIMG.mainIMG}>
      <img src={src} alt="" />
    </div>
  );
};
export default IMG;
