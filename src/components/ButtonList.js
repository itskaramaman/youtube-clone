import Button from "./Button";

const ButtonList = () => {
  const texts = ["All", "Kapil Sharma", "Diljit Dosanjh"];

  return (
    <div className="flex gap-4 whitespace-nowrap">
      {texts.map((name, index) => (
        <Button key={index} name={name} />
      ))}
    </div>
  );
};

export default ButtonList;
