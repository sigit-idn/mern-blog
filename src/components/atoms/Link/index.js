import React from "react";
import './link.scss'

const Link = ({ title, onClick }) => <a onClick={onClick}>{title}</a>

export default Link;
