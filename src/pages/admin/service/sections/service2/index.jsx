import {Create} from './features/create'
import {Update} from './features/update'
import {Delete} from './features/delete'

export const Service2 = () => {
    return (
        <>
 <div className="flex flex-col py-[10px] items-center gap-[10px]">
            <div className="w-[100%] h-auto flex items-center justify-between px-[10px]">
                <span className="text-[18px] font-medium text-black">Service Section Card</span>
                <Create />
            </div>
             <div className='w-[100%] h-[37vh] overflow-auto flex flex-col items-center gap-[10px] border'>
                <div className='flex items-center justify-between w-[100%] border-b py-[10px] h-auto'>
                   <div className="w-[50%] flex items-center border-r justify-center">
                     <span className="text-[18px] font-medium text-black">Title</span>
                   </div>
                     <div className="w-[70%] flex items-center px-[20px] border-r justify-center">
                        <span className="text-[18px] font-medium text-black">Description</span>
                     </div>
                      <div className="w-[30%] flex items-center border-r justify-center">
                        <span className="text-[18px] font-medium text-black">Image</span>
                      </div>
                       <div className="w-[25%] px-[10px] flex items-center justify-center">
                        <span className="text-[18px] font-medium text-black">action</span>
                       </div>
                </div>
                <div className='flex items-center py-[10px] justify-between w-[100%] h-auto'>
                     <div className="w-[100%] flex flex-col gap-[15px]">
                        {/* {data?.map((item) => (
                             <div key={item.id} className="w-[100%] flex items-center border-b pb-[8px] justify-between">
                            <div onClick={() => setOpen(!open)} className="w-[100%] cursor-pointer flex items-center border-r justify-center">
                            <span className="text-[18px] font-normal text-center text-gray-600">{open ? item.name : item.name.slice(0, 10)}</span>
                         </div>
                         <div className="w-[30%] flex px-[20px] items-center border-r justify-center">
                            <span className="text-[18px] font-normal text-gray-600">{item.icon}</span>
                         </div>
                          <div className="w-[100%] flex  items-center border-r justify-center">
                            <span className="text-[18px] font-normal text-gray-600">{item.title}</span>
                          </div>
                          <div className="w-[100%] flex items-center border-r  justify-center">
                            <span className="text-[18px] font-normal text-gray-600">{item.description}</span>
                          </div>
                          <div className="w-[35%] px-[10px] flex items-center justify-center">
                            <Update id={item.id} />
                            <Delete id={item.id} />
                          </div>
                         </div>
                        ))} */}
                     </div>
                </div>
            </div>
         </div>
        </>
    )
}