import { CiUser } from "react-icons/ci";
import styles from "./profiles.module.css"
import { MdAlternateEmail,MdLocalPhone,MdWorkOutline } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";


export const ProfileHeader = ({nome,data,job}) => {
  return (
    <>
    
    <div className={styles.Infobase} >
            
            </div>
               <div className={styles.ContentAbsulute} >
               <div className={styles.avatar_user} >
                    <img  src='https://img.freepik.com/psd-gratuitas/renderizacao-3d-do-personagem-avatar_23-2150611722.jpg?w=826&t=st=1703686974~exp=1703687574~hmac=4bbd2ed2c232960e442a64941c73ba7021eda6b6667846f2d0a47cba4e3d5951' />
                 </div>
               <div className={styles.InfoPessoal} >
                <span>{job?job:"Biomédico"}</span>
               <h4>{nome}</h4>
               <span>Juntou-se,{data}</span>
               
               </div>
            </div>
    
    
    </>

  );
};


export const ProfileAside=({nome,email})=>{

  return(
    <aside  className={styles.aside} >
            <div className={styles.Title_Perfil}  >
                <h3>Meu perfil</h3>
            </div>
            <div>
            <div  className={styles.Title_Sobre}>
              <h3>SOBRE</h3>
            </div>
                <div>
                    <div className={styles.AsideProfileInfos}  >
                        <FaRegUser className={styles.Icons_Profiler}   />
                        <h4>{nome}</h4>
                    </div>
                    <div className={styles.AsideProfileInfos}> 
                    <MdWorkOutline className={styles.Icons_Profiler} />
                        <h4>Bimédico</h4>
                    </div>
                </div>
                <div className={styles.Title_Contacto}>
                    <h3>CONTACTO</h3>
                </div>
                <div>
                    <div className={styles.AsideProfileInfos} >
                        <MdAlternateEmail className={styles.Icons_Profiler} />
                        <h4>{email}</h4>
                    </div>
                    <div className={styles.AsideProfileInfos} >
                    <MdLocalPhone className={styles.Icons_Profiler} />
                        <h4>+244 999 999 999</h4>
                    </div>
                </div>
            </div>
        </aside>


  )
}
