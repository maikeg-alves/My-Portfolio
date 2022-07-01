import styled from "styled-components";

export const Buttun = styled.button`
  background: transparent;
  border: none;
  color: #fff;
  font-size: 27px;
  height: 383px;
  opacity: 0.5;
  &:hover {
    opacity: 1;
    cursor: pointer;
    background-color: #f4f4f43e;
  }
`;

export const RowBtn = styled.div`
  display: flex;
  justify-content: center;
`;

export const Item = styled.div`
  height: 400px;
  width: 250px;
  margin-left: 10px;
  cursor: pointer;
  align-items: flex-start;
  background-size: cover;
  background-position: center;
  &:hover {
    background-size: 405%;
    transition: background-size 2s ease-in;
    transition: 10s ease-in-out;
  }

  span {
    height: 400px;
    width: 250px;
  }

  @media (max-device-width: 425px) {
    height: 759px;
    width: 451px;
    margin-left: 53px;
    span {
      height: 759px;
      width: 451px;
    }
  }

  @media (min-device-width: 320px) and (max-device-width: 375px) {
    height: 840px;
    width: 535px;
    margin-left: 12px;
    span {
      height: 840px;
      width: 535px;
    }
  }
`;

export const Carousel = styled.div`
  background-color: transparent;
  padding: 10px;
  overflow-x: auto;
  scroll-behavior: smooth;
  transition: 0.5s ease-in-out;
  &::-webkit-scrollbar {
    display: none;
  }
`;
export const Text_item = styled.p`
  transition: 0.5s ease-in-out;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;

  text-overflow: ellipsis;
  font-size: 12px;
  color: #fff;
  margin-top: 10px;
  margin-bottom: 10px;
`;

export const Title = styled.div`
  text-align: center;
  padding-bottom: 36px;
  @media (max-width: 768px) {
    text-align: center;
    padding-bottom: 30px;
  }
  @media (max-width: 426px) {
    h1 {
      font-size: 35px;
    }
  }
  @media (max-width: 320px) and (max-width: 375px) {
    h1 {
      font-size: 45px;
    }
  }
`;


export const Card = styled.div`
/*  width: 190px;
 height: 254px; */
 height: 400px;
  width: 250px;
 background: #f5f5f5;
 position: relative;
 box-shadow: 0px 2px 5px rgba(35,35,35,0.3);
 transition: box-shadow .3s ease-in-out;
 border-radius: 20px;
 margin-left: 10px;


 .card-info {
 position: absolute;
 bottom: 0;
 width: 100%;
 padding: 1rem; 
 text-align: center;
 color : #000000;
}

/*Image*/
.card-img {
 height: 100%;
 width: 100%;
 background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
 position: absolute;
 transition: transform .3s ease-in-out;
 z-index: 2;
 border-radius: 19px;
}

/*Buttons*/
.social-media {
 position: absolute;
 bottom: 55px;
 display: flex;
 justify-content: space-between;
 width: 100%;
 padding: 0 1rem;
 transform: translateY(-200%);
 z-index: 3;
 @media (max-device-width: 425px) {
   bottom: 180px;
}
 @media (min-device-width: 320px) and (max-device-width: 375px) {
    bottom: 190px;
    padding: 0 2rem;
}
}

.social-media li {
 background: #f5f5f5;
 padding: 10px 12px;
 border-radius: 50%;
 cursor: pointer;
 opacity: 0;
 transition: all .3s ease-in;
}

/*Text*/
.title {
 font-size: 1.5em;
 font-weight: 500;
 @media (max-device-width: 425px) {
    font-size: 3.2em;
 }
 @media (min-device-width: 320px) and (max-device-width: 375px) {
    font-size: 3.5rem;
 }
}

.subtitle {
 letter-spacing: 1px;
 font-size: 0.9em;
 @media (max-device-width: 425px) {
    font-size: 2.2em;
 }
 @media (min-device-width: 320px) and (max-device-width: 375px) {
    font-size: 1.9em;
 }
}

ul {
 list-style: none;
}

svg {
 --size: 25px;
 width: var(--size);
 height: var(--size);
 fill: #252525;
 @media (min-device-width: 320px) and (max-device-width: 375px) {
  --size: 60px; 
 }
}

/* Hover */
&:hover {
 box-shadow: 1px 2px 10px rgba(35,35,35,0.5);
}

&:hover .card-img {
 transform: translateY(-30%);
 filter: brightness(0.25) opacity(1.75);
}

&:hover .social-media li {
 transform: translateY(-5%);
 opacity: 1;
}

&:hover .social-media li:nth-child(1) {
 transition-delay: 0s;
}

&:hover .social-media li:nth-child(2) {
 transition-delay: .1s;
}

&:hover .social-media li:nth-child(3) {
 transition-delay: .2s;
}

@media (max-device-width: 425px) {
    height: 759px;
    width: 451px;
    margin-left: 53px;

  }

  @media (min-device-width: 320px) and (max-device-width: 375px) {
    height: 840px;
    width: 535px;
    margin-left: 12px;
   
  }

`