import { CardDestaque } from "../CardDestaque";
import { dadosDestaque } from "../../data/dataDestaque";
import "./style.css";

export function Destaque() {
  return (
    <div className="container-card-destaque distance">
      {dadosDestaque.map((destaque, index) => (
        <CardDestaque
          key={index}
          title={destaque.title}
          description={destaque.description}
          iconImage={destaque.iconImage}
        />
      ))}
    </div>
  );
}
