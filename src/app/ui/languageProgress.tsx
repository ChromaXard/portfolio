import Image from "next/image";
import { useTranslations } from "next-intl";
export default function LanguageProgress({name, percent}: {name: string, percent: number}) {
    const t = useTranslations('skills');
    return (
        <div className="p-2 h-full w-full flex flex-col">
            <div className="flex justify-between mb-1 justify-items-center items-center">
            <div>
                <Image
                src={`/${name}.svg`}
                width={40}
                height={40}
                alt={`${name} svg logo`}/>
            </div>
            <span className="text-md font-medium">{`${percent}%`}</span>
            </div>
            <div className="w-full bg-gray-200 rounded-sm h-5 my-3">
            <div className="bg-blue-600 h-5 rounded-sm" style={{ width: `${percent}%` }}></div>
            </div>
            <div>
                {(() => {
                    try {
                        const description = t(`detail.${name}.description`);
                        return description ? (
                            <span className="text-sm text-gray-600">{description}</span>
                        ) : (
                            <span className="text-sm text-gray-600">{t("noDetails")}</span>
                        );
                    } catch (e) {
                        return <span className="text-sm text-gray-600">{t("noDetails")}</span>;
                    }
                })()}
            </div>
        </div>
    );
}
