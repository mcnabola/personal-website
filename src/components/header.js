import {Link as GatsbyLink} from "gatsby";
import React from "react";
import {Box, Heading, Link} from "theme-ui";      

export const Header = ( {siteTitle, menuLinks} ) => {
    return (
        <>
            <Box as="header" sx={ {bg:"highlight", mb :"1.45em", lg:"block"} }>
            <Box 
                as="div"
                sx={{
                    m:"0 auto",
                    maxWidth:"640px",
                    p:"1.45em 1.0875rem",
                    display: "flex",
                    flex: 1,
                }}
        >
            {menuLinks.map(link => (
                <Link as={GatsbyLink} to={link.link} sx={{ p: 1 }}>
                <Heading>{link.name}</Heading>
                </Link>
            )) }

            </Box> 

            </Box>
        </>

    );

};
