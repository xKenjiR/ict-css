import Card from "./Card";

const descriptions: { title: string; text: string }[] = [
  {
    title: "Security",
    text: "Increase security and reduce business risk with multiple layers of protection built into the operating system.",
  },
  {
    title: "Infrastructure",
    text: "Evolve your datacenter infrastructure to achieve greater efficiency and scale with Hyper-converged Infrastructure.",
  },
  {
    title: "Updated",
    text: "Enables you to create cloud native and modernize traditional apps using containers and micro-services.",
  },
];

const Cards = () => {
  return (
    <div
      className="
        relative
        flex flex-col md:flex-row justify-between gap-5
        w-[80%] ml-[10%]
        mt-5 md:-mt-30
        lg:w-[70%] lg:ml-[15%]
      "
      data-aos="fade-up"
    >
      {descriptions.map((desc) => (
        <Card title={desc.title}>{desc.text}</Card>
      ))}
    </div>
  );
};

export default Cards;
