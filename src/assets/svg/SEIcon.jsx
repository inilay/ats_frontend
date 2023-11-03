import React from "react";
import classes from './Svg.module.css';


function SEIcon() {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="90"
            height="90"
            className={classes.my_svg}
            viewBox="0 0 32 32"
            >
            <path d="M27.738 26.227l-2.758-3.235-2.519-.338-5.669-6.707 5.412-6.259-.604-.523-5.102 5.9V5.681h-.799v8.972l-4.711-5.572-.61.516 5.321 6.294v.098L9.98 22.602l-2.732.367-2.768 3.246 1.719.759-.585.677.604.523.602-.696 1.042 1.624 2.768-3.246-.052-2.723 5.121-5.922v5.74l-1.922 2.168v4.43l1.922-.581v1.154h.799v-1.139l1.896.567v-4.43l-1.896-2.114v-6.169l5.169 6.115-.056 2.916 2.758 3.235 1.078-1.679.71.839.61-.516-.671-.794zM9.44 10.664l-.589-3.165 3.06 1.083 1.445-.634L7.4 5.84l1.155 6.205zm14.223 1.38l1.155-6.205-5.956 2.109 1.492.655 3.119-1.104-.613 3.294zm-7.577-8.546l1.4 2.422 1.759.53L16.083.98l-3.149 5.47 1.759-.532z"></path>
        </svg>
    );
  }
  
  export default SEIcon;