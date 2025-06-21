// First, we will create a header and a button, then hide the ‘menu’ span, making it accessible only to screen readers.
import React from 'react'
import Link from 'next/link'

export default function Nav() {

    return (
        <header className="header" aria-controls='menu'>
            <Link href="/" className="logo">SPARK</Link>
            <input className="menu-btn" type="checkbox" id="menu-btn" />
            <label className="menu-icon" htmlFor="menu-btn"><span className="navicon"></span></label>
            <ul className="menu">
                <li><a href="https://www.rva.gov/parks-recreation/powhatan-community-center">Contact</a></li>
                <li><a href="#team">Our Team</a></li>
                <li><a href="/sessions">Events & Upcoming Sessions</a></li>
            </ul>
        </header>
    );
}

