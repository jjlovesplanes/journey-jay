import { RiReactjsLine } from "react-icons/ri";
import { DiJava } from "react-icons/di";
import {
    SiPython,
    SiJavascript,
    SiDart,
    SiPytorch,
    SiMongodb,
    SiFirebase,
    SiPostgresql,
    SiMysql,
    SiSqlite,
    SiGooglecloud,
    SiC,
    SiCplusplus,
    SiCsharp,
    SiJulia,
    SiAndroidstudio,
    SiTensorflow,
    SiDjango,
    SiFlask,
    SiOpencv,
    SiCss3,
    SiHtml5
} from "react-icons/si";
import {animate, motion} from "framer-motion";

const iconVariants = (duration) => ({
    initial: {y:-10},
    animate: {
        y: [5, -5],
        transition: {
            duration: duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse",
        }
    }
});

const Technologies = () => {
    return (
        <div className="border-b border-neutral-800 pb-24">
            <motion.h1 
                whileInView={{opacity:1, y:0}}
                initial={{opacity:0, y: -100}}
                transition={{duration:1.5}}
                className="my-20 text-center text-4xl">
                Technologies
            </motion.h1>

            <motion.div whileInView={{ opacity: 1, x:0 }} initial={{opacity: 0, x: -100 }}
                transition={{duration:1.5}}

                className="flex flex-wrap items-center justify-center gap-4">
                {/* Frontend */}
                <motion.div variants={iconVariants(2.5)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
                    <RiReactjsLine className="text-7xl text-cyan-400"/>
                </motion.div>
                <motion.div variants={iconVariants(1)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">  
                    <SiJavascript className="text-7xl text-yellow-400"/> 
                </motion.div>
                <motion.div variants={iconVariants(5)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">  
                    <SiCss3 className="text-7xl text-blue-500"/> 
                </motion.div>
                <motion.div variants={iconVariants(2.5)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">  
                    <SiHtml5 className="text-7xl text-orange-500"/> 
                </motion.div>

                {/* Backend */}
                <motion.div variants={iconVariants(2)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
                    <DiJava className="text-7xl text-red-400"/> 
                </motion.div>
                <motion.div variants={iconVariants(3.5)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">  
                    <SiPython className="text-7xl text-blue-400"/>
                </motion.div>
                <motion.div variants={iconVariants(5)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">  
                    <SiDart className="text-7xl text-blue-500"/> 
                </motion.div>
                <motion.div variants={iconVariants(4)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">  
                    <SiC className="text-7xl text-blue-500"/> 
                </motion.div>
                <motion.div variants={iconVariants(4.5)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">  
                    <SiCplusplus className="text-7xl text-blue-400"/> 
                </motion.div>
                <motion.div variants={iconVariants(3.5)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">  
                    <SiCsharp className="text-7xl text-purple-500"/> 
                </motion.div>
                <motion.div variants={iconVariants(2.5)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">  
                    <SiJulia className="text-7xl text-purple-400"/> 
                </motion.div>

                {/* Database */}
                <motion.div variants={iconVariants(2)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">  
                    <SiMongodb className="text-7xl text-green-500"/> 
                </motion.div>
                <motion.div variants={iconVariants(4)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">  
                    <SiFirebase className="text-7xl text-yellow-500"/> 
                </motion.div>
                <motion.div variants={iconVariants(5)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">  
                    <SiPostgresql className="text-7xl text-blue-600"/> 
                </motion.div>
                <motion.div variants={iconVariants(3)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">  
                    <SiMysql className="text-7xl text-blue-400"/> 
                </motion.div>
                <motion.div variants={iconVariants(2.5)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">  
                    <SiSqlite className="text-7xl text-blue-300"/> 
                </motion.div>

                {/* Machine Learning */}
                <motion.div variants={iconVariants(4.5)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">  
                    <SiPytorch className="text-7xl text-orange-500"/> 
                </motion.div>
                <motion.div variants={iconVariants(3.5)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">  
                    <SiTensorflow className="text-7xl text-orange-500"/> 
                </motion.div>
                <motion.div variants={iconVariants(2.5)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">  
                    <SiOpencv className="text-7xl text-blue-400"/> 
                </motion.div>

                {/* Web Frameworks */}
                <motion.div variants={iconVariants(2)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">  
                    <SiDjango className="text-7xl text-green-600"/> 
                </motion.div>
                <motion.div variants={iconVariants(4)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">  
                    <SiFlask className="text-7xl text-white"/> 
                </motion.div>

                {/* IDEs */}
                <motion.div variants={iconVariants(3)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">  
                    <SiAndroidstudio className="text-7xl text-green-500"/> 
                </motion.div>

                {/* Cloud Platforms */}
                <motion.div variants={iconVariants(5)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">  
                    <SiGooglecloud className="text-7xl text-blue-500"/> 
                </motion.div>
            </motion.div>
        </div>
    );
};

export default Technologies;
