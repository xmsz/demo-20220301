import Guide from '@/components/Guide';

const Home = () => {
  return (
    <div className="text-base font-bold">
      下面是图标
      <div className="first">
        这行是蓝色
        <div className="second">理论上这行是红色</div>
      </div>
      <div className="i-ph-anchor-simple-thin" />
      <div className="i-mdi-alarm text-orange-400" />
      <div className="i-logos-vue text-3xl" />
      <button className="i-ic-baseline-escalator-warning" />
      <div className="i-twemoji-grinning-face-with-smiling-eyes hover:i-twemoji-face-with-tears-of-joy" />
    </div>
  );
};

export default Home;
