import Button from "./Button";

const ButtonList = () => {
  const texts = ["All", "Kapil Sharma", "Diljit Dosanjh"];

  return (
    <div className="flex gap-4 whitespace-nowrap">
      {texts.map((text) => (
        <Button text={text} />
      ))}
    </div>
  );
};

export default ButtonList;
