import React, { Component } from 'react'
import classes from './Feature.module.css'

export class Feature extends Component {
    render() {
        return (
            <div>
                <section className={classes.mainSection}>
                    <h2 className={classes.heading}>Featured topics by category</h2>
                    <div className={classes.content}>
                        <div className={classes.mainContent}>
                            <h2 className={classes.contentHeading}>Development</h2>
                            <div className={classes.subContent}>
                                <div>
                                    <a href="#" className={classes.subHeading}>Python</a>
                                </div>
                                <div className={classes.noStudent}>27,582,375 students</div>
                            </div>
                            <div className={classes.subContent}>
                                <div>
                                    <a href="#" className={classes.subHeading}>Web Development</a>
                                </div>
                                <div className={classes.noStudent}>9,157,746 students</div>
                            </div>
                            <div className={classes.subContent}>
                                <div>
                                    <a href="#" className={classes.subHeading}>Machine Learning</a>
                                </div>
                                <div className={classes.noStudent}>5,601,093 students</div>
                            </div>
                        </div>
                        <div className={classes.mainContent}>
                        <h2 className={classes.contentHeading}>Buisiness</h2>
                            <div className={classes.subContent}>
                                <div>
                                    <a href="#" className={classes.subHeading}>Financial Analysis</a>
                                </div>
                                <div className={classes.noStudent}>1,035,033 students</div>
                            </div>
                            <div className={classes.subContent}>
                                <div>
                                    <a href="#" className={classes.subHeading}>SQL</a>
                                </div>
                                <div className={classes.noStudent}>4,045,620 students</div>
                            </div>
                            <div className={classes.subContent}>
                                <div>
                                    <a href="#" className={classes.subHeading}>PMP</a>
                                </div>
                                <div className={classes.noStudent}>1,353,578 students</div>
                            </div>
                        </div>
                        <div className={classes.mainContent}>
                        <h2 className={classes.contentHeading}>IT and Software</h2>
                            <div className={classes.subContent}>
                                <div>
                                    <a href="#" className={classes.subHeading}>AWS Certification</a>
                                </div>
                                <div className={classes.noStudent}>4,242,574 students</div>
                            </div>
                            <div className={classes.subContent}>
                                <div>
                                    <a href="#" className={classes.subHeading}>Ethical Hacking</a>
                                </div>
                                <div className={classes.noStudent}>8,598,317 students</div>
                            </div>
                            <div className={classes.subContent}>
                                <div>
                                    <a href="#" className={classes.subHeading}>Cyber Security</a>
                                </div>
                                <div className={classes.noStudent}>3,109,204 students</div>
                            </div>
                        </div>
                        <div className={classes.mainContent}>
                        <h2 className={classes.contentHeading}>Design</h2>
                            <div className={classes.subContent}>
                                <div>
                                    <a href="#" className={classes.subHeading}>Photoshop</a>
                                </div>
                                <div className={classes.noStudent}>9,356,121 students</div>
                            </div>
                            <div className={classes.subContent}>
                                <div>
                                    <a href="#" className={classes.subHeading}>Graphic Design</a>
                                </div>
                                <div className={classes.noStudent}>2,698,233 students</div>
                            </div>
                            <div className={classes.subContent}>
                                <div>
                                    <a href="#" className={classes.subHeading}>Drawing</a>
                                </div>
                                <div className={classes.noStudent}>2,136,185 students</div>
                            </div>
                        </div>
                        <a href="#" className={classes.explore}>
                            <span>Explore more</span>
                        </a>
                    </div>
                </section>
                
            </div>
        )
    }
}

export default Feature
