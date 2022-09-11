import React, {useState} from "react";
import { Card } from "semantic-ui-react";

function PokemonCard({name, id, hp, frontImg, backImg}) {
  const [count, setCount] = useState(1);



  function handleImgClick() {
    setCount(count + 1)
  }

  return (
    <Card onClick={handleImgClick}>
      <div>
        <div className="image">
          <img 
            src={count % 2 === 0 ? backImg : frontImg}
            alt={name}   
          />
        </div>
        <div className="content">
          <div className="header">{name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {hp}
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;
