import { Button } from '@mui/material'
import Styles from '../../../styles/components-style/custom-buttons/blueFilledBtn/BlueFilledBtn.module.css'

const BlueFilledBtn = ({ btnTitle, btnLink, anchor, navlink, ariaLabel, ...rest }) => {
    return (
        <>
            {
                navlink ? <Button className={`${Styles.blueFilledBtn} rounded-2 me-1 mt-md-0 mt-2`} {...rest}>
                    <a href={btnLink} aria-label={ariaLabel || "Icon filled"}>
                        {btnTitle}
                    </a>
                </Button> : anchor ? <Button className={`${Styles.blueFilledBtn} rounded-2 me-1 mt-md-0 mt-2`} {...rest}>
                    <a href={btnLink} aria-label={ariaLabel || "Icon filled"} >{btnTitle}</a>
                </Button> : null
            }
        </>
    )
}

export default BlueFilledBtn