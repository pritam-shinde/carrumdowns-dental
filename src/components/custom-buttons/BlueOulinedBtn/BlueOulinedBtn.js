import { Button } from '@mui/material'
import Styles from '../../../styles/components-style/custom-buttons/blueOutlinedBtn/BlueOutlinedBtn.module.css'

const BlueOulinedBtn = ({ btnTitle, btnLink, anchor, navlink, ariaLabel }) => {
    return (
        <>
            {
                navlink ? <Button className={`${Styles.blueOutlinedBtn} rounded-2 me-1 mt-md-0 mt-2`}>
                    <a href={btnLink} aria-label={ariaLabel || "Icon Outlined"}>
                        {btnTitle}
                    </a>
                </Button> : anchor ? <Button className={`${Styles.blueOutlinedBtn} rounded-2 me-1 mt-md-0 mt-2`} aria-label={ariaLabel || "Icon Outlined"}>
                    <a href={btnLink}>{btnTitle}</a>
                </Button> : null
            }
        </>
    )
}

export default BlueOulinedBtn