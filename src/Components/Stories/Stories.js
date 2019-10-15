import React, { useState } from "react";
import FeaturedPost from "./Featured.js";
import InfiniteStories from "./InfiniteStories";

const Stories = props => {
  const [feature, setFeature] = useState([]);
  return (
    <div className="flex">
      <div className="w-full">
        <FeaturedPost feature={feature} />
        <InfiniteStories
          filter={props.filter}
          feature={feature}
          setFeature={setFeature}
        />
      </div>
    </div>
  );
};

export default Stories;
