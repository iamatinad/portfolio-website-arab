import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import image1 from "../assets/Achievements background1.jpg"

function Achievements() {
  return (
    <div>
      <Header />
      <div >
        <div class="relative">
       <img class="w-4/5 h-1/3" src={image1}/>
       <div class="grid gap-4 grid-cols-3 grid-rows-3 mt-6" >
        <div class="p-2.5">
          <h3>first</h3>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae perferendis quibusdam, ab eum voluptas tempore quod. Beatae, possimus veritatis, iste quia ipsum quod numquam, laboriosam molestiae autem voluptatem quidem illo magnam voluptatum! Autem accusantium recusandae veritatis praesentium nemo iure assumenda atque rem delectus. Dolores repellendus consequatur earum qui at dolor optio quis aliquid unde ullam sequi, possimus ab eum, iure esse inventore accusamus nihil molestias. Unde soluta animi voluptatem pariatur, rem minus magnam debitis corrupti doloremque facilis totam hic repellendus dolorem optio? Debitis culpa modi dolorem illum, quas vero vitae assumenda reprehenderit officia quam? Reiciendis mollitia eaque dolorem accusantium possimus?</p>
          </div>
        <div class="p-2.5">
          <h3>second</h3>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae perferendis quibusdam, ab eum voluptas tempore quod. Beatae, possimus veritatis, iste quia ipsum quod numquam, laboriosam molestiae autem voluptatem quidem illo magnam voluptatum! Autem accusantium recusandae veritatis praesentium nemo iure assumenda atque rem delectus. Dolores repellendus consequatur earum qui at dolor optio quis aliquid unde ullam sequi, possimus ab eum, iure esse inventore accusamus nihil molestias. Unde soluta animi voluptatem pariatur, rem minus magnam debitis corrupti doloremque facilis totam hic repellendus dolorem optio? Debitis culpa modi dolorem illum, quas vero vitae assumenda reprehenderit officia quam? Reiciendis mollitia eaque dolorem accusantium possimus?</p>
          </div>
        <div class="p-2.5">
          <h3>third</h3>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae perferendis quibusdam, ab eum voluptas tempore quod. Beatae, possimus veritatis, iste quia ipsum quod numquam, laboriosam molestiae autem voluptatem quidem illo magnam voluptatum! Autem accusantium recusandae veritatis praesentium nemo iure assumenda atque rem delectus. Dolores repellendus consequatur earum qui at dolor optio quis aliquid unde ullam sequi, possimus ab eum, iure esse inventore accusamus nihil molestias. Unde soluta animi voluptatem pariatur, rem minus magnam debitis corrupti doloremque facilis totam hic repellendus dolorem optio? Debitis culpa modi dolorem illum, quas vero vitae assumenda reprehenderit officia quam? Reiciendis mollitia eaque dolorem accusantium possimus?</p>
          </div>
       </div>
       </div>
      </div>
      <Footer />
    </div>
  );
}

export default Achievements;
