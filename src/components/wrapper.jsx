export default function wWrapper ({title}) {

    return <>
        <div className="flex items-center justify-start gap-12 bg-[#181715] ml-[111px] mr-32 border-2 border-[#151412] mt-4">
            <div className="w-[4px] h-[50px] bg-[#464544]">
            </div>
            <div className="my-10">
                <div className="flex justify-start items-center text-lg">
                    <h5 className="text-white">{title}</h5>
                    <span className="text-white">SOME
                    </span>
                </div>
                <div className="">
                    <h3 className="text-white my-4 text-3xl">Captain Jack sparrow</h3>
                    <p className="text-[#888] text-left pr-12">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio vitae illum soluta necessitatibus. Minima eos expedita facilis quaerat dicta quibusdam?
                    </p>
                </div>
            </div>
        </div>
    </>
}