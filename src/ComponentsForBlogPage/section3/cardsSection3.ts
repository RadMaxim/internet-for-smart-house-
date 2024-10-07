import img1 from "./../../../public/img/BlogPage/CardsBottomBlog/Rectangle-5-_4_.webp";
import img2 from "./../../../public/img/BlogPage/CardsBottomBlog/Rectangle-5-_5_.webp";
import img3 from "./../../../public/img/BlogPage/CardsBottomBlog/Rectangle-5-_6_.webp";
import img4 from "./../../../public/img/BlogPage/CardsBottomBlog/Rectangle 5 (7).webp";
import img5 from "./../../../public/img/BlogPage/CardsBottomBlog/Rectangle 5 (8).webp";

const arr = [
  {
    img: img1,
    header: "Massa eu in laoreet enim augue vulputate nunc.",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lectus quisque magna in nisl nibh bibendum ipsum, elit duis. Donec.",
  },
  {
    img: img2,
    header: "Feugiat a euismod arcu feugiat posuere morbi.",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lectus quisque magna in nisl nibh bibendum ipsum, elit duis. Donec.",
  },
  {
    img: img3,
    header: "Sociis purus pellentesque faucibus vitae et felis.",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lectus quisque magna in nisl nibh bibendum ipsum, elit duis. Donec.",
  },
  {
    img: img4,
    header: "Cursus feugiat mi pellentesque mauris sed eu.",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lectus quisque magna in nisl nibh bibendum ipsum, elit duis. Donec.",
  },
  {
    img: img5,
    header: "A morbi arcu curabitur etiam fringilla augue.",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lectus quisque magna in nisl nibh bibendum ipsum, elit duis. Donec.",
  },
  {
    img: img1,
    header: "Massa eu in laoreet enim augue vulputate nunc.",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lectus quisque magna in nisl nibh bibendum ipsum, elit duis. Donec.",
  },
  {
    img: img2,
    header: "Feugiat a euismod arcu feugiat posuere morbi.",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lectus quisque magna in nisl nibh bibendum ipsum, elit duis. Donec.",
  },
  {
    img: img3,
    header: "Sociis purus pellentesque faucibus vitae et felis.",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lectus quisque magna in nisl nibh bibendum ipsum, elit duis. Donec.",
  },
  {
    img: img4,
    header: "Cursus feugiat mi pellentesque mauris sed eu.",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lectus quisque magna in nisl nibh bibendum ipsum, elit duis. Donec.",
  },
  {
    img: img5,
    header: "A morbi arcu curabitur etiam fringilla augue.",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lectus quisque magna in nisl nibh bibendum ipsum, elit duis. Donec.",
  },
  {
    img: img1,
    header: "Massa eu in laoreet enim augue vulputate nunc.",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lectus quisque magna in nisl nibh bibendum ipsum, elit duis. Donec.",
  },
  {
    img: img2,
    header: "Feugiat a euismod arcu feugiat posuere morbi.",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lectus quisque magna in nisl nibh bibendum ipsum, elit duis. Donec.",
  },
  {
    img: img3,
    header: "Sociis purus pellentesque faucibus vitae et felis.",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lectus quisque magna in nisl nibh bibendum ipsum, elit duis. Donec.",
  },
  {
    img: img4,
    header: "Cursus feugiat mi pellentesque mauris sed eu.",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lectus quisque magna in nisl nibh bibendum ipsum, elit duis. Donec.",
  },
  {
    img: img5,
    header: "A morbi arcu curabitur etiam fringilla augue.",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lectus quisque magna in nisl nibh bibendum ipsum, elit duis. Donec.",
  },
  {
    img: img3,
    header: "Sociis purus pellentesque faucibus vitae et felis.",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lectus quisque magna in nisl nibh bibendum ipsum, elit duis. Donec.",
  },
  {
    img: img4,
    header: "Cursus feugiat mi pellentesque mauris sed eu.",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lectus quisque magna in nisl nibh bibendum ipsum, elit duis. Donec.",
  },
  {
    img: img5,
    header: "A morbi arcu curabitur etiam fringilla augue.",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lectus quisque magna in nisl nibh bibendum ipsum, elit duis. Donec.",
  },
];

const method = (
  arr: { img: string; header: string; desc: string }[],
): { img: string; header: string; desc: string }[][] => {
  if (arr.length < 6) {
    return [arr];
  }
  const before = arr.slice(0, 5);
  const after = arr.slice(5);
  if (after.length > 5) {
    return [before, ...method(after)];
  }
  return [before, after];
};
const cards = method(arr);

export { cards };
