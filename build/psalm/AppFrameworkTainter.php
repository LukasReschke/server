<?php

use PhpParser;
use Psalm\Codebase;
use Psalm\CodeLocation;
use Psalm\Context;
use Psalm\FileManipulation;
use Psalm\Plugin\Hook\AfterFunctionLikeAnalysisInterface;
use Psalm\StatementsSource;
use Psalm\Type\TaintKindGroup;

class AppFrameworkTainter implements AfterFunctionLikeAnalysisInterface
{
    public static function afterStatementAnalysis(
        PhpParser\Node\FunctionLike $stmt,
        Psalm\Storage\FunctionLikeStorage $classlike_storage,
        Psalm\StatementsSource $statements_source,
        Psalm\Codebase $codebase,
        array &$file_replacements = []
    ): ?bool {
        if($statements_source->getFQCLN() != null) {
            if($codebase->classExtendsOrImplements($statements_source->getFQCLN(), \OCP\AppFramework\Controller::class)) {
                if($stmt instanceof PhpParser\Node\Stmt\ClassMethod) {
                    if($stmt->isPublic() && !$stmt->isMagic()) {
                        foreach ($stmt->params as $i => $param)
                        {
                            $expr_type = new Psalm\Type\Union([new Psalm\Type\Atomic\TString()]);
                            $expr_identifier = (strtolower($statements_source->getFQCLN()) . '::' . strtolower($classlike_storage->cased_name) . '#' . ($i+1));

                            if ($expr_type) {
                                $codebase->addTaintSource(
                                    $expr_type,
                                    $expr_identifier,
                                    TaintKindGroup::ALL_INPUT,
                                    new CodeLocation($statements_source, $param)
                                );
                            }
                        }
                    }
                }
            }
        }
        return null;
    }
}
