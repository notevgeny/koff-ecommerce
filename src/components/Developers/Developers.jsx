import style from "../../views/Footer/Footer.module.scss";

const developers = [
  {
    id: 1,
    spec: "Designer",
    link: "https://t.me/Mrsmallowww",
    name: "Anastasia Ilina",
  },
  {
    id: 2,
    spec: "Developer",
    link: "#",
    name: "Evgeny",
  },
];
export const Developers = () => (
  <>
    {developers.map((developer) => {
      return (
        <div key={developer.id} className={style.developerItem}>
          {developer.spec}:{" "}
          <a target="_blank" rel="noreferrer" href={developer.link}>
            {developer.name}
          </a>
        </div>
      );
    })}
  </>
);
