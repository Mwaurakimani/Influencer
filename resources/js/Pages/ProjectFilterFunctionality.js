import { reactive } from "vue";

const platforms = reactive([
    'Facebook',
    'Twitter',
    'Instagram',
    'Tiktok'
]);

const filterData = reactive({
    platforms: []
});

function filterPlatform(input, name) {
    if (input.is(":checked")) {
        let obj = { [name]: {} };
        filterData.platforms.push(obj);
    } else {
        filterData.platforms = filterData.platforms.filter(
            (platform) => Object.keys(platform)[0] !== name
        );
    }
}


function filterInfluencerClass(input, label) {
    const platformName = input.parent().parent().parent().find('.platformName').text().trim();

    // Find the platform object in filterData.platforms
    const platform = filterData.platforms.find((item) => Object.keys(item)[0] === platformName);

    if (input.is(":checked")) {
        if (!platform) {
            // Create the platform object and influencerClassFilter if it doesn't exist
            filterData.platforms.push({ [platformName]: { influencerClassFilter: [label] } });
        } else if (!platform[platformName].influencerClassFilter) {
            // Create the influencerClassFilter if it doesn't exist
            platform[platformName].influencerClassFilter = [label];
        } else {
            // Add the label to the existing influencerClassFilter
            platform[platformName].influencerClassFilter.push(label);
        }
    } else {
        if (platform && platform[platformName].influencerClassFilter) {
            // Remove the label from the influencerClassFilter
            const index = platform[platformName].influencerClassFilter.indexOf(label);
            if (index !== -1) {
                platform[platformName].influencerClassFilter.splice(index, 1);
            }
        }
    }
}

const setUp = () => {
    $('.platformSelectX').on('change', (event) => {
        event.stopImmediatePropagation();
        let checkbox = $(event.target);
        let label = checkbox.parent().find('label').text();

        if (platforms.includes(label)) {
            filterPlatform(checkbox, label);
        } else {
            filterInfluencerClass(checkbox,label);
        }

    });

    $('.platformSelectY').on('change', (event) => {
        event.stopImmediatePropagation();
        let checkbox = $(event.target);
        let label = checkbox.parent().find('label').text();

        if (platforms.includes(label)) {
            filterPlatform(checkbox, label);
        } else {
            filterInfluencerClass(checkbox,label);
        }

    });
};


function findPlatform(platformName) {
    const platforms = filterData.platforms;

    for (let i = 0; i < platforms.length; i++) {
        if (Object.keys(platforms[i])[0] === platformName) {
            return true;
        }
    }

    return false;
}


export {
    setUp,
    platforms,
    filterData,
    findPlatform
};
