import { Sidebar , Avatar} from "flowbite-react";
import { BiBuoy, BiSolidEdit } from "react-icons/bi";
import { HiArrowSmRight, HiChartPie, HiInbox, HiOutlineCloudUpload, HiShoppingBag, HiTable, HiUser, HiViewBoards } from "react-icons/hi";
import userImg from "../assets/profile.jpg"
import { useContext } from "react";
import { AuthContext } from "../contects/AuthProvider";
import { FaDeleteLeft, FaDownLeftAndUpRightToCenter } from "react-icons/fa6";

export const SideBar = () => {
  const{user} = useContext(AuthContext)
  return (
    <Sidebar aria-label="Sidebar with content separator example" className="bg-blue-200">
        <Sidebar.Logo href="/" img className='w-16 h-16' >
        <Avatar rounded size="xs" img="/src/assets/ME-1.jpg" alt="profile picture" />
       <p> 
        Mohana Sree Katam
       </p>
      </Sidebar.Logo>
      <Sidebar.Items>
        <Sidebar.ItemGroup>
          <Sidebar.Item href="/admin/dashboard" icon={HiChartPie}>
            Dashboard
          </Sidebar.Item>
          <Sidebar.Item href="/admin/dashboard/upload" icon={HiOutlineCloudUpload}>
           Upload Book
          </Sidebar.Item>
          <Sidebar.Item href="/admin/dashboard/manage" icon={HiInbox}>
           Manage Books
          </Sidebar.Item>
          <Sidebar.Item href="/admin/dashboard/manage" icon={BiSolidEdit}>
           Edit Books
          </Sidebar.Item>
          <Sidebar.Item href="/admin/dashboard/manage" icon={FaDeleteLeft}>
           Delete Books
          </Sidebar.Item>
          
          <Sidebar.Item href="/shop" icon={HiShoppingBag}>
            Products
          </Sidebar.Item>
          <Sidebar.Item href="/login" icon={HiArrowSmRight}>
            Sign In
          </Sidebar.Item>
          <Sidebar.Item href="/logout" icon={HiTable}>
            Log out
          </Sidebar.Item>
        </Sidebar.ItemGroup>
        <Sidebar.ItemGroup>
          
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  )
}
