function ProductDescriptionTab() {
    const Specifications = [
        {
            component: "CPU",
            value: "Intel Core i7-10750H 2.6GHz",
            remarks: "6 Cores, 12 Threads",
        },
        {
            component: "GPU",
            value: "NVIDIA GeForce RTX 2060",
            remarks: "6GB GDDR6",
        },
        {
            component: "RAM",
            value: "16GB DDR4 2933MHz",
            remarks: "2x8GB",
        },
        {
            component: "Storage",
            value: "512GB NVMe SSD",
            remarks: "",
        },
        {
            component: "Display",
            value: "15.6-inch FHD 144Hz IPS",
            remarks: "1920 x 1080",
        },
        {
            component: "Keyboard",
            value: "RGB Backlit Keyboard",
            remarks: "",
        },
        {
            component: "Battery",
            value: "4-Cell 70Wh",
            remarks: "",
        },
        {
            component: "Operating System",
            value: "Windows 10 Home",
            remarks: "",
        },
    ];

    return (
        <div>
            <div className="pb-8">
                <p className="font-bold pb-2">Description</p>
                <p className="text-sm">
                    Lorem ipsum dolor sit amet. Qui necessitatibus aperiam ut
                    consequuntur autem qui dolor consequatur qui laudantium
                    iusto. Sit assumenda culpa sed asperiores vitae sit quam
                    voluptatibus 33 totam nihil. At rerum assumenda ut deserunt
                    voluptatum aut fugit voluptatem et libero dolore nam nisi
                    itaque et voluptatem commodi.
                </p>
            </div>
            <div>
                <p className="font-bold pb-2">Specification</p>
                <div className="grid grid-cols-3 text-sm font-bold border-b pb-3 mb-3">
                    <div className="">
                        <p className="">Component</p>
                    </div>
                    <div className="">
                        <p>Value</p>
                    </div>
                    <div className="">
                        <p>Remarks</p>
                    </div>
                </div>
                {Specifications.map((specification, index) => (
                    <div className="grid grid-cols-3 text-sm" key={index}>
                        <div className="pb-3">
                            <p className="">{specification.component}</p>
                        </div>
                        <div className="pb-3">
                            <p>{specification.value}</p>
                        </div>
                        <div className="pb-3">
                            <p>{specification.remarks}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ProductDescriptionTab;
