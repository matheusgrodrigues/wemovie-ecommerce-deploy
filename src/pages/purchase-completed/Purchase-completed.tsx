"use client";

import { useContext, useEffect } from "react";
import { CartContextProvider } from "../../components/CartContext";
import { useNavigate } from "react-router";
import Heading from "../../components/atoms/Heading";
import Button from "../../components/atoms/Button";
import Paragraph from "../../components/atoms/Paragraph";
import PurchaseImage from "./purchase-completed.svg";

export default function PurchaseCompleted() {
   const { clearItems } = useContext(CartContextProvider);

   const navigate = useNavigate();

   useEffect(() => {
      clearItems();
   }, [clearItems]);

   return (
      <div className="bg-white p-64 w-full">
         <div className="flex flex-col items-center gap-24 max-w-[12.5rem] md:max-w-[27.93rem] mx-auto">
            <Heading
               config={{
                  variant: "h1",
                  fontWeight: "bold",
                  fontSize: "20",
                  color: "dark1",
               }}
               style={{
                  textAlign: "center",
               }}
            >
               Compra realizada com sucesso!
            </Heading>

            {/*TODO: className="w-[18.375rem] md:h-[19.187rem] object-contain" */}
            <img
               width={"18.375rem"}
               height={"19.187rem"}
               src={PurchaseImage}
               alt="Compra realizada com sucesso!"
               className="w-[18.375rem] md:h-[19.187rem] object-contain"
            />

            <Button
               onClick={() => navigate("/")}
               config={{
                  variant: "primary",
                  size: "md",
               }}
            >
               <Paragraph
                  config={{
                     fontWeight: "bold",
                     fontSize: "12",
                     color: "white",
                  }}
               >
                  Voltar
               </Paragraph>
            </Button>
         </div>
      </div>
   );
}
