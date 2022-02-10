import React from "react";

export default function Skills(params) {
    const skillList = params.skillList;
    return (
        <>
            {skillList ? 
                <div className="row pb-0 mt-auto" style={{ display: 'inline' }}>
                    {Object.values(skillList).map((item, index) => {
                        return (
                            <div key={index} style={{ display: 'inline' }}>
                                <span className="btn skillsCard" style={{  borderRadius: 10, fontWeight: 600, letterSpacing: 0.4, fontSize: 12 }}>
                                    {item}
                                </span>
                            </div>
                        )
                    })}


                </div>
             :
                ''
            }
        </>
    )
}