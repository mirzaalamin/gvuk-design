import Accordion from '@/components/Accordion'
import HeroSingleProduct from '@/components/HeroSingleProduct'
import React from 'react'


const page = () => {

    return (
        <div>
            {/* Section 1 Start */}
            <div className='primary-gradient dark:bg-gray-800 pt-[100px] border-t-2 border-primary'>
                <div className="container">
                    <HeroSingleProduct
                        title="Laser Wires"
                        logoUrl=""
                        description={`High grade component assured laser wires for any application. Matching materials is essential, and all our wires are sent out with conformity certificates and each wire has lasered the material code.
                        <br />
                        Available in 320mm lengths or on a spool we stock 0.2mm to 0.8mm
                        <br />
                        <b>For more information or to purchase any of the resins, please use the enquiry form on this page.</b>`}
                        titleColor="text-primary"

                    />
                </div>
            </div>
            {/* Section 1 End */}

            {/* Section 2 Start */}
            <div className='bg-white dark:bg-gray-900 py-16'>
                <div className='container  flex flex-col lg:flex-row gap-8'>
                    <div className='flex flex-col gap-0'>
                        <Accordion title="Jewellery Resins">
                            <div className="chiac-content body-text !text-[14px]" style={{ display: "block" }}>
                                <div className="chiac-content" style={{ display: "block" }}>
                                    <p>
                                        <strong>Easy Cast 2.0 C</strong>
                                        <br />
                                        Easy Cast 2.0 C is a breakthrough material for the high-speed printing of a
                                        castable models. Easy Cast 2.0 C is a photopolymer with the highest wax
                                        content available in 3D printing today.
                                    </p>

                                    <br />

                                    <p>
                                        Easy Cast 2.0 C was developed for printing exclusively on EnvisionTEC’s
                                        patented cDLM printers. Because cDLM technology has almost zero separation
                                        forces during printing, it allows for 90% liquid wax content in the
                                        formulation. Consequently, patterns printed in Easy Cast 2.0 C feature
                                        burnout similar to injection wax.
                                    </p>
                                    <br />
                                    <p>
                                        What’s more, because of the addition of special hardeners, Easy Cast 2.0 C
                                        still delivers exceptional crisp features, similar to EnvisionTEC’s low- and
                                        no-wax materials — from the smallest of pierced filigrees to the sharpest of
                                        corners on raised surfaces.
                                        <br />
                                        Easy Cast 2.0 C, launched in 2017, sets a new standard in castable 3D
                                        printed materials.
                                    </p>
                                    <br />
                                    <hr className="border-[#666] mb-3 mt-3" />

                                    <p>
                                        <strong>EPIC</strong>
                                        <br />
                                        Super sharp detail and excellent burnout properties for direct investment
                                        casting, available on the full selection of Perfactory printers.
                                    </p>

                                    <hr className="border-[#666] mb-3 mt-3" />

                                    <p>
                                        <strong>EC500</strong>
                                        <br />
                                        Wax based easy to cast resin with 30% faster build-times over Epic with
                                        softer definition, available on the full selection of Perfactory printers.
                                    </p>

                                    <hr className="border-[#666] mb-3 mt-3" />

                                    <p>
                                        <strong>EC3000</strong>
                                        <br />
                                        New easy-cast resin with 3x more wax than any other polymer material with
                                        zero boiling during burnout this offers the easier burnout with greater
                                        definition. The greater viscosity and higher wax content produces the best
                                        surface finish and results in the industry; available on the full selection
                                        of Perfactory printers.
                                    </p>

                                    <hr className="border-[#666] mb-3 mt-3" />

                                    <p>
                                        <strong>HTM140</strong>
                                        <br />
                                        Another high temperature material with crisper and sharper detail over the
                                        others, perfect for sharp detail with a working tolerance of 140°C ideal for
                                        master creations using hot or cold vulcanising rubber molds. Again your
                                        models can be polished, drilled and carved, available on the full selection
                                        of Perfactory printers.
                                    </p>

                                    <hr className="border-[#666] mb-3 mt-3" />

                                    <p>
                                        <strong>PIC100</strong>
                                        <br />
                                        Probably the most used with established clients around the world, harder
                                        than EC500, Pic100 burns out at a moderate temperature with minimal thermal
                                        expansion so optimally suited for jewellery, available on the full selection
                                        of Perfactory printers.
                                    </p>

                                    <hr className="border-[#666] mb-3 mt-3" />

                                    <p>
                                        <strong>RC90</strong>
                                        <br />
                                        A popular line of photosensitive resins that contain ceramic particles,
                                        EnvisionTEC’s RC materials build tough and stiff parts at very high
                                        resolutions. Parts made with these materials are also resistant to high
                                        temperatures and are ideal for silicone molding and can be finished with a
                                        variety of methods including painting or plating.
                                    </p>

                                    <hr className="border-[#666] mb-3 mt-3" />

                                    <p>
                                        <strong>WIC100</strong>
                                        <br />
                                        With 20% powder wax content, WIC100 Series remains a popular value material
                                        in EnvisionTEC’s portfolio of castable materials. WIC100 delivers quality
                                        detail and printing speeds, along with a standard wax burn-out cycle with
                                        regular gypsum investment. During the burn-out cycle, the nano-wax melts
                                        away first allowing the resin to burn off without excessive expansion.
                                    </p>
                                </div>

                            </div>
                        </Accordion>

                        <Accordion title="Dental Resins">
                            <div className="chiac-content body-text !text-[14px]" style={{ display: "block" }}>
                                <div className="chiac-content" style={{ display: "block" }}>
                                    <p>
                                        <strong>E-AquaModel</strong>
                                        <br />
                                        Material for high accuracy orthodontic models as well as solid crown and bridge models that can be quickly and easily cleaned without the need to use alcohol.
                                    </p>

                                    <hr className="border-[#666] mb-3 mt-3" />

                                    <p>
                                        <strong>KeyOrtho IBT</strong>
                                        <br />
                                        Biocompatible, tasteless, and odorless, KeyOrtho IBT for EnvisionTEC is ideal for manufacturing indirect bonding trays. Drastically reduce chair time and increase patient comfort during the orthodontic bracket setting process.
                                    </p>

                                    <hr className="border-[#666] mb-3 mt-3" />

                                    <p>
                                        <strong>E-MFP</strong>
                                        <br />
                                        E-MFP (Metal Free Partial) is a revolutionary dental material able to be used in the production of ready-to-use partial denture. No need for casting and assembling, dental professionals will be able to create the entire partial, including the framework and built-in teeth in a biocompatible 3D printing material with incredible strength and flexibility. The balance between inorganic fillers and the resin give the material its high strength and wear resistance. E-MFP is easy to finish and polish, and can be stained with all types of composite staining kits to blend perfectly a beautiful and natural aesthetic.
                                    </p>

                                    <hr className="border-[#666] mb-3 mt-3" />

                                    <p>
                                        <strong>Flexcera Base</strong>
                                        <br />
                                        Flexcera Base is a light-curable resin for the fabrication of high-impact and removable denture bases.
                                    </p>

                                    <hr className="border-[#666] mb-3 mt-3" />

                                    <p>
                                        <strong>E-Model HS</strong>
                                        <br />
                                        E-Model HS is a high speed 3D printing material for use in producing orthodontic arch models extremely quickly on EnvisionTEC cDLM 3D printers.
                                    </p>

                                    <hr className="border-[#666] mb-3 mt-3" />

                                    <p>
                                        <strong>Flexcera Smile</strong>
                                        <br />
                                        Light-curable resin for the fabrication of high-impact artificial teeth with variable translucency for dentures.
                                    </p>

                                    <hr className="border-[#666] mb-3 mt-3" />

                                    <p>
                                        <strong>E-SepFree</strong>
                                        <br />
                                        E-SepFree is easy to release when directly building orthodontic appliances as it does not require a separator. It is also easy to carve when hand contouring contact areas, opening interproximals, and much more.
                                    </p>

                                    <hr className="border-[#666] mb-3 mt-3" />

                                    <p>
                                        <strong>KeySplint Soft for EnvisionTEC</strong>
                                        <br />
                                        KeySplint Soft for EnvisionTEC is a 3D printing resin ideal for printing splints and night guards.
                                    </p>

                                    <hr className="border-[#666] mb-3 mt-3" />

                                    <p>
                                        <strong>E-Partial</strong>
                                        <br />
                                        A castable material developed for a specific need in the dental industry: delivering delicate partial frameworks with thin features and some flexibility.
                                    </p>

                                    <hr className="border-[#666] mb-3 mt-3" />

                                    <p>
                                        <strong>E-OrthoShape</strong>
                                        <br />
                                        E-OrthoShape is a grey ABS-like material that prints in 100 micron layers. It is recommended for the affordable volume production of models on which to produce clear thermoformed aligners by orthodontic professionals.
                                    </p>

                                    <hr className="border-[#666] mb-3 mt-3" />

                                    <p>
                                        <strong>Press E-Cast</strong>
                                        <br />
                                        A wax-filled photopolymer material for the production of full anatomical crowns and bridges with extreme dimensional accuracy in X, Y and Z, as well as exceptional surface finish.
                                    </p>

                                    <hr className="border-[#666] mb-3 mt-3" />

                                    <p>
                                        <strong>NextDent Indirect Bonding Tray</strong>
                                        <br />
                                        NextDent Indirect Bonding Tray is a biocompatible Class I material for orthodontic applications.
                                    </p>

                                    <hr className="border-[#666] mb-3 mt-3" />

                                    <p>
                                        <strong>E-Tray</strong>
                                        <br />
                                        E-Tray is a 3D printing material for use in producing individual customized impression trays.
                                    </p>

                                    <hr className="border-[#666] mb-3 mt-3" />

                                    <p>
                                        <strong>NextDent Gingiva Mask</strong>
                                        <br />
                                        NextDent Gingiva Mask is a flexible material that can be used in combination with a model material. This makes it possible to print parts of the model that need a certain flexibility, such as Gingiva Masks on implant models.
                                    </p>

                                    <hr className="border-[#666] mb-3 mt-3" />

                                    <p>
                                        <strong>E-Model Beige</strong>
                                        <br />
                                        E-Model Beige printing material for DLP and cDLM 3D printers is the perfect choice for orthodontic models for thermoforming aligners over.
                                    </p>

                                    <hr className="border-[#666] mb-3 mt-3" />

                                    <p>
                                        <strong>E-Guide</strong>
                                        <br />
                                        EnvisionTEC’s E-Guide is a biocompatible certified Class I material, developed for the production of high precision surgical drill guides for use in implant surgery. The results produced by combining E-Guide with EnvisionTEC technology are superior to traditional methods of manufacturing implant placement guides.
                                    </p>

                                    <hr className="border-[#666] mb-3 mt-3" />

                                    <p>
                                        <strong>E-Model Light DLP</strong>
                                        <br />
                                        E-Model Light DLP printing material for DLP and cDLM 3D printers is the perfect choice for a wide variety of high-accuracy dental modeling needs.
                                    </p>

                                    <hr className="border-[#666] mb-3 mt-3" />

                                    <p>
                                        <strong>E-Denstone</strong>
                                        <br />
                                        A material developed specifically for the rapid production of highly accurate, scannable dental models. Looks and feels similar to traditional gypsum models.
                                    </p>

                                    <hr className="border-[#666] mb-3 mt-3" />

                                    <p>
                                        <strong>E-Guard</strong>
                                        <br />
                                        E-Guard is a biocompatible transparent material for the production of accurate orthodontic bite splints and night guards. The results produced by combining E-Guard with EnvisionTEC technology are superior to traditional methods of manufacturing bite guards and night guards. It is a clear material, allowing for maximum visibility.
                                    </p>
                                </div>

                            </div>
                        </Accordion>

                        <Accordion title="Modeling Resins">
                            <div className="chiac-content body-text !text-[14px]" style={{ display: "block" }}>
                                <div className="chiac-content" style={{ display: "block" }}>
                                    <p>
                                        <strong>RCP30</strong>
                                        <br />
                                        Nanoparticle resin ideal for medium-size models with hard wearing, stiff properties. Developed for master creations for hot or cold vulcanising rubber molds with a heat tolerance of 140°C and almost zero clean-up, this can be polished, drilled and carved, perfect for medium sized items, available on the full selection of Perfactory printers.
                                    </p>

                                    <hr className="border-[#666] mb-3 mt-3" />

                                    <p>
                                        <strong>RC31</strong>
                                        <br />
                                        Nanoparticle resin perfect for larger pieces with a stiff and tough finish ideal for mechanical and engineered pieces and as a master creation with a heat tolerance of 140°C and almost zero clean-up with is ideal for injection molding and can be polished, drilled and carved, available on the full selection of Perfactory printers.
                                    </p>

                                    <hr className="border-[#666] mb-3 mt-3" />

                                    <p>
                                        <strong>RC70</strong>
                                        <br />
                                        Nanoparticle resin designed for medium-size pieces with a stiff and tough finish ideal for electrical, mechanical and engineered pieces and as a master creation with a heat tolerance of 140°C and almost zero clean-up with is ideal for injection molding and can be polished, drilled and carved, available on the full selection of Perfactory printers.
                                    </p>

                                    <hr className="border-[#666] mb-3 mt-3" />

                                    <p>
                                        <strong>RC90</strong>
                                        <br />
                                        Used by the majority of model makers, our line of photosensitive resins that contain ceramic particles offer tough and stiff parts at very high resolutions. Parts made with these materials are also resistant to high temperatures and are ideal for silicone molding, pump housings, blades, test parts for wind tunnels, light reflectors and various automotive applications.
                                        <br />
                                        These materials are also perfect master models for animation applications and can be finished with a variety of methods including painting or plating.
                                    </p>

                                    <hr className="border-[#666] mb-3 mt-3" />

                                    <p>
                                        <strong>R5</strong>
                                        <br />
                                        Robust, accurate and functional with strong memory retention, R5 offers a perfect balance of rigidity and functionality, very similar to polypropylene. Ideal for master patterns in rubber molding applications, available on the full selection of Perfactory printers.
                                    </p>

                                    <hr className="border-[#666] mb-3 mt-3" />

                                    <p>
                                        <strong>R11</strong>
                                        <br />
                                        Like R5 with excellent up and down-facing surfaces. Both liquid photopolymer materials offer superior fatigue properties, available on the full selection of Perfactory printers.
                                    </p>

                                    <hr className="border-[#666] mb-3 mt-3" />

                                    <p>
                                        <strong>LS600</strong>
                                        <br />
                                        Latest breakthrough in extremely durable photopolymers for very accurate parts and detail plus high impact resistance – similar to thermoplastics, available on the full selection of Perfactory printers.
                                    </p>
                                </div>


                            </div>
                        </Accordion>

                        <Accordion title="Engineering Resins">
                            <div className="chiac-content body-text !text-[14px]" style={{ display: "block" }}>
                                <div className="chiac-content" style={{ display: "block" }}>
                                    <p>
                                        <strong>ABS</strong>
                                        <br />
                                        The ABS range are the closest to ABS plastics in the industry with EnvisionTEC’s wide-ranging opportunities from snap-fit with elasticity AB-flex to high impact ABS-Tough, available on the desktop and Perfactory printers.
                                    </p>

                                    <hr className="border-[#666] mb-3 mt-3" />

                                    <p>
                                        <strong>R5 Gray</strong>
                                        <br />
                                        Accurate and functional parts with wide processing latitude and high quality up and down facing surfaces, available on the desktop and Perfactory printers.
                                    </p>

                                    <hr className="border-[#666] mb-3 mt-3" />

                                    <p>
                                        <strong>Photosilver</strong>
                                        <br />
                                        Functional highly accurate and crisp parts with high temperature resistance and durability. available on the desktop and Perfactory printers.
                                    </p>

                                    <hr className="border-[#666] mb-3 mt-3" />

                                    <p>
                                        <strong>HTM140</strong>
                                        <br />
                                        Another high temperature material with crisper and sharper detail over the others, perfect for sharp detail with a working tolerance of 140°C ideal for master creations using hot or cold vulcanising rubber molds. Again your models can be polished, drilled and carved, available on the full selection of Perfactory printers.
                                    </p>

                                </div>


                            </div>
                        </Accordion>
                    </div>
                    <div className="shrink-0 lg:w-[350px] flex flex-col gap-5">
                        <div className='flex flex-col gap-10'>
                            <div className='dark:bg-gray-800 flex flex-col py-6 bg-primary'>

                                <div className='px-4 text-white'>
                                    <h2 className="h4">Enquiry Form</h2>
                                    <p className="post-description !leading-6 !text-white">Please complete the form below to enquire about our laser wire availability, pricing and delivery timescales.</p>
                                </div>
                                <div className='mt-10'>
                                    <iframe
                                        src="https://www.gvukdesign.co.uk/laser-wires-form"
                                        width="100%"
                                        height="1050"
                                        style={{ border: "none", overflow: "hidden" }}
                                        scrolling="no"
                                    ></iframe>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Section 2 End */}



        </div>
    )
}

export default page