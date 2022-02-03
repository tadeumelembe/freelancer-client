import React from "react";

export default function Skills(params) {
    const skillList = params.skillList;
    console.log(skillList)
    return (
        <>
            {skillList ? 
                <div className="row pb-0 mt-auto" style={{ display: 'inline' }}>
                    {Object.values(skillList).map((item, index) => {
                        return (
                            <div className="" style={{ display: 'inline' }}>
                                <span className="btn" style={{ color: '#222222', backgroundColor: '#d3d3d3', borderRadius: 10, fontWeight: 600, letterSpacing: 0.4, fontSize: 12 }}>
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