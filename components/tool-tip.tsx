import type { NextPage } from 'next';
import styles from './tool.module.css';
import { useTranslation } from "react-i18next";

type ToolTipType = {
  	onClose?: () => void;
}

const ToolTip:NextPage<ToolTipType> = ({ onClose }) => {

	const { t, i18n } = useTranslation();
  	
  	return (
    		<div className={styles.toolTip} onClick={onClose}>
      			<h5 className='z-50 text-center text-2xl' style={{
						fontFamily: "__secondFont_72e69f, __secondFont_Fallback_72e69f"
					}}>{
						t('tooltipText')
					}</h5>
    		</div>);
};

export default ToolTip;
