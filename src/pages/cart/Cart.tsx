import { useCallback, useContext } from "react";
import { CartContextProvider } from "../../components/CartContext";
import { useNavigate } from "react-router";
import { MovieSchema } from "../../schemas/MovieSchema";
import Heading from "../../components/atoms/Heading";
import Paragraph from "../../components/atoms/Paragraph";
import { formatToBRL } from "../../utils/format";
import Icon from "../../components/atoms/Icon";
import EmptyState from "../../components/organism/EmptyState/EmptyState";
import Button from "../../components/atoms/Button";

export default function Cart() {
   const { removeSingleItemById, removeItemsById, getUniqueItems, getAmount, addItem, cart } =
      useContext(CartContextProvider);

   const navigate = useNavigate();

   const decreaseAmount = useCallback(
      (id: number) => getAmount(id) > 1 && removeSingleItemById(id),
      [removeSingleItemById, getAmount]
   );

   const calculateSubTotal = useCallback((item: MovieSchema): number => item.price * getAmount(item.id), [getAmount]);
   const calculateTotal = useCallback((): number => cart.reduce((total, item) => total + item.price, 0), [cart]);
   const deleteItem = useCallback((id: number) => removeItemsById(id), [removeItemsById]);
   const addAmount = useCallback((movie: MovieSchema) => addItem(movie), [addItem]);

   return (
      <div className="bg-white p-16 md:p-24 w-full flex flex-col gap-21 md:gap-24">
         {getUniqueItems().length > 0 && (
            <header className="hidden w-full md:flex">
               {/* TODO: configurar uppercase nos breakpoints */}
               <Heading
                  config={{
                     variant: "h2",
                     fontWeight: "bold",
                     fontSize: "14",
                     color: "gray",
                  }}
               >
                  Produto
               </Heading>
               <Heading
                  config={{
                     variant: "h2",
                     fontWeight: "bold",
                     fontSize: "14",
                     color: "gray",
                  }}
               >
                  QTD
               </Heading>
               <Heading
                  config={{
                     variant: "h2",
                     fontWeight: "bold",
                     fontSize: "14",
                     color: "gray",
                  }}
               >
                  Subtotal
               </Heading>
            </header>
         )}

         {getUniqueItems().length > 0 ? (
            getUniqueItems().map((item) => (
               <div className="flex gap-16 relative" key={item.id}>
                  {/* TODO: ajustar responsivo desta imagem (tamanho) */}
                  <img width={91} height={114} src={item.image} alt={item.title} />

                  <div className="flex flex-col md:flex-row justify-between md:items-center overflow-x-auto">
                     <div className="flex md:flex-col gap-32 md:gap-8 md:w-[7.75rem]">
                        {/* TODO: ajustar max-w-[6.375rem]*/}
                        <Heading
                           config={{
                              variant: "h2",
                              fontWeight: "bold",
                              fontSize: "14",
                              color: "dark1",
                           }}
                        >
                           {item.title}
                        </Heading>

                        <Paragraph
                           config={{
                              fontWeight: "bold",
                              fontSize: "16",
                              color: "dark1",
                           }}
                        >
                           {formatToBRL(item.price)}
                        </Paragraph>
                     </div>

                     <div className="flex md:items-center gap-16">
                        <div className="flex items-center md:w-[15.75rem]">
                           <button className="w-max cursor-pointer" onClick={() => decreaseAmount(item.id)}>
                              <Icon
                                 config={{
                                    color: "blue2",
                                    icon: "minus",
                                    size: 18,
                                 }}
                              />
                           </button>

                           <input
                              className={`w-[3.687rem] h-[1.625rem] mx-10 text-center text-dark1 font-regular text-14 rounded border-1 border-gray`}
                              value={`${getAmount(item.id)}`}
                              type="text"
                              readOnly
                           />

                           <button className="w-max cursor-pointer" onClick={() => addAmount(item)}>
                              <Icon
                                 config={{
                                    color: "blue2",
                                    icon: "plus",
                                    size: 18,
                                 }}
                              />
                           </button>
                        </div>

                        <div className="flex flex-col">
                           {/*TODO: ajustar -> customClassName: "uppercase md:hidden", */}
                           <Paragraph
                              config={{
                                 fontWeight: "bold",
                                 fontSize: "12",
                                 color: "gray",
                              }}
                           >
                              subtotal
                           </Paragraph>

                           {/* TODO: ajustar -> customClassName: "uppercase text-nowrap", */}
                           <Paragraph
                              config={{
                                 fontWeight: "bold",
                                 fontSize: "16",
                                 color: "dark1",
                              }}
                           >
                              {formatToBRL(calculateSubTotal(item))}
                           </Paragraph>
                        </div>
                     </div>
                  </div>

                  <button
                     className="w-max self-start md:self-center cursor-pointer md:absolute -right-[0]"
                     onClick={() => deleteItem(item.id)}
                  >
                     <Icon
                        config={{
                           color: "blue2",
                           icon: "trash",
                           size: 18,
                        }}
                     />
                  </button>
               </div>
            ))
         ) : (
            <EmptyState />
         )}

         {cart.length > 0 && (
            <footer className="flex flex-col gap-21 md:gap-24">
               <div className="w-full h-[1px] bg-gray block" />

               <div className="w-full flex flex-col-reverse md:flex-row justify-between">
                  {/* TODO: ajustar -> customClassName:
                           "uppercase text-14 md:text-12 font-bold w-full max-w-full md:max-w-[10.812rem]", */}
                  <Button
                     onClick={() => navigate("/cart/purchase-completed")}
                     config={{
                        variant: "primary",
                     }}
                  >
                     Finalizar Pedido
                  </Button>

                  <div className="flex justify-between md:justify-start items-center gap-32 mb-16 md:mb-[0]">
                     <Paragraph
                        config={{
                           fontWeight: "bold",
                           fontSize: "14",
                           color: "gray",
                        }}
                        style={{
                           textTransform: "uppercase",
                        }}
                     >
                        total
                     </Paragraph>

                     <Paragraph
                        config={{
                           fontWeight: "bold",
                           fontSize: "24",
                           color: "dark1",
                        }}
                        style={{
                           textTransform: "uppercase",
                           textWrap: "nowrap",
                        }}
                     >
                        {formatToBRL(calculateTotal())}
                     </Paragraph>
                  </div>
               </div>
            </footer>
         )}
      </div>
   );
}
