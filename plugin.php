<?php

class pluginMaintenanceModeExtended extends Plugin {
	
	private $loadOnController = array(
		'configure-plugin'
	    );

	public function siteBodyEnd()
	{
        $html = '<script src="'.$this->htmlPath().'js/clipboard.min.js"></script>';
        $html .= '<script src="'.$this->htmlPath().'js/main.js"></script>';
        return $html;
	}

}